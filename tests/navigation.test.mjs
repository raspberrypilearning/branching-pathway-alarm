import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const data = JSON.parse(readFileSync(new URL('../data/pages.json', import.meta.url), 'utf8'));
const checked = {version:1, ready:true, checks:{'1A':true}, notes:{}, name:'My alarm'};

// Run the actual route renderer and event handlers with a small document double.
// Browser layout and keyboard interaction are checked separately in the UI.
async function site(saved = null) {
  const elements = new Map();
  const events = {};
  const stored = new Map(saved ? [['branching-pathway-pico-alarm-v1', JSON.stringify(saved)]] : []);
  const get = selector => {
    if (!elements.has(selector)) elements.set(selector, {
      innerHTML:'', textContent:'', classList:{add(){}, remove(){}}, focus(){},
      querySelector() {return null;},
      addEventListener(type, handler) {events[selector + ':' + type] = handler;},
    });
    return elements.get(selector);
  };
  const context = vm.createContext({
    document:{querySelector:get, addEventListener(type, handler) {events[type] = handler;}},
    location:{hash:''}, window:{addEventListener(type, handler) {events[type] = handler;}, scrollTo(){}},
    localStorage:{getItem:key => stored.get(key), setItem:(key, value) => stored.set(key, value)},
    fetch:async () => ({ok:true, json:async () => data}),
    setTimeout:() => 0, clearTimeout(){},
  });
  await vm.runInContext(`(async () => { ${source}\n })()`, context);
  return {
    go(route) {context.location.hash = '#' + route; events.hashchange(); return get('#main').innerHTML;},
    nav:() => get('#site-nav').innerHTML,
    change(id, checked) {events.change({target:{id, checked}});},
    note(value) {events.input({target:{id:'page-note', value}});},
    help() {events.click({target:{closest:selector => selector === 'a' ? {hasAttribute:name => name === 'data-prereq'} : null}});},
    saved:() => JSON.parse(stored.get('branching-pathway-pico-alarm-v1')),
    route:() => context.location.hash,
  };
}

test('Pico is the only gate for every stage and all 27 existing page links', async () => {
  const fresh = await site();
  const ready = await site(checked);
  for (const route of [...data.groups.filter(g => g.slug !== 'setup').map(g => g.slug),
                       ...Object.keys(data.pages).filter(id => id !== '1A').map(id => 'step/' + id)]) {
    assert.match(fresh.go(route), /Check your Pico first/, route);
    assert.doesNotMatch(ready.go(route), /Check your Pico first/, route);
    assert.match(ready.go(route), /<h1>/, route);
  }
  assert.match(fresh.go('step/1A'), /Did your Pico pass the test/);
});

test('sidebar keeps all stages in the suggested order on home, choices and lessons', async () => {
  const app = await site(checked);
  const titles = ['Test your Pico', 'Detect a change', 'Give a warning', 'Decide with code',
                  'Make a case', 'Test and Improve', 'Ideas to borrow'];
  for (const route of ['home', 'hub', 'detect', 'step/3A', 'step/6A']) {
    app.go(route);
    const positions = titles.map(title => app.nav().indexOf(title));
    assert.ok(positions.every((position, i) => position >= 0 && (i === 0 || position > positions[i - 1])), route);
  }
  app.go('step/6A');
  assert.match(app.nav(), /class="nav-link current" href="#code" aria-current="page"/);
});

test('setup returns to the requested chooser and help returns to the original lesson', async () => {
  const app = await site();
  app.go('warning');
  app.go('step/1A');
  app.change('page-check', true);
  assert.equal(app.route(), 'warning');
  app.go('step/6A');
  app.help();
  assert.match(app.go('hub'), /Return to Connect your input and output/);
  assert.match(app.go('detect'), /Return to Connect your input and output/);
  assert.match(app.go('step/3A'), /Return to Connect your input and output/);
});

test('existing notes and tried checks survive the new layout and navigation', async () => {
  const app = await site({...checked, checks:{...checked.checks, '3A':true}, notes:{'3A':'A foil switch'}});
  assert.match(app.go('step/3A'), /A foil switch/);
  app.note('A folded foil switch');
  app.go('step/4A');
  app.change('page-check', true);
  const reopened = await site(app.saved());
  assert.match(reopened.go('step/3A'), /A folded foil switch/);
  assert.match(reopened.go('warning'), /Tried ✓/);
  assert.match(reopened.go('detect'), /Tried ✓/);
});
