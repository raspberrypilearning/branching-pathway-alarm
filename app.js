const KEY = 'branching-pathway-pico-alarm-v1';
const main = document.querySelector('#main');
const nav = document.querySelector('#site-nav');
const notice = document.querySelector('#notice');
let data;
let project = {version: 1, ready: false, checks: {}, notes: {}, name: 'My alarm'};
let returnTo = null;
let pending = null;

const esc = value => String(value ?? '').replace(/[&<>"']/g, letter => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[letter]));
const allOptions = () => data.groups.flatMap(group => group.options);
const validRoute = route => route === 'home' || route === 'hub' || /^step\/\d+[A-Z]$/.test(route) && !!data.pages[route.slice(5)];
const currentRoute = () => {const route = decodeURIComponent(location.hash.slice(1)) || 'home'; return validRoute(route) ? route : 'home';};
const pageId = () => currentRoute().startsWith('step/') ? currentRoute().slice(5) : null;
const ready = () => project.ready && project.checks['1A'];

function toast(message) {
  notice.textContent = message;
  notice.classList.add('visible');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => notice.classList.remove('visible'), 4000);
}
function persist() {
  try {localStorage.setItem(KEY, JSON.stringify(project));}
  catch {toast('Browser saving is unavailable. Use Save a copy.');}
}
function download(contents, filename, type) {
  const url = URL.createObjectURL(new Blob([contents], {type}));
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function restore(value) {
  if (!value || value.version !== 1 || typeof value !== 'object') throw Error('Choose a Pico Alarm project file.');
  const safe = {version:1, ready:value.ready === true, checks:{}, notes:{}, name:'My alarm'};
  if (typeof value.name === 'string') safe.name = value.name.slice(0, 100);
  if (value.checks && typeof value.checks === 'object' && !Array.isArray(value.checks))
    for (const [key, done] of Object.entries(value.checks))
      if (data.pages[key] && typeof done === 'boolean') safe.checks[key] = done;
  if (value.notes && typeof value.notes === 'object' && !Array.isArray(value.notes))
    for (const [key, text] of Object.entries(value.notes))
      if (data.pages[key] && typeof text === 'string') safe.notes[key] = text.slice(0, 10000);
  if (!safe.checks['1A']) safe.ready = false;
  return safe;
}
function navigation() {
  const route = currentRoute();
  nav.innerHTML = `<a class="nav-home ${route === 'home' ? 'current' : ''}" href="#home">Start</a>
    <a class="nav-home ${route === 'step/1A' ? 'current' : ''}" href="#step/1A">Test your Pico ${ready() ? '✓' : ''}</a>
    <a class="nav-home ${route === 'hub' ? 'current' : ''}" href="#hub">Choose a part</a>
    ${route.startsWith('step/') && route !== 'step/1A' ? `<div class="nav-choices">${data.groups.filter(group => group.title !== 'Start here').map(group => `<details class="nav-group" ${group.options.some(option => route === 'step/'+option.id) ? 'open' : ''}><summary>${esc(group.title)}</summary>${group.options.map(option => `<a class="nav-step ${route === 'step/'+option.id ? 'current' : ''}" href="#step/${option.id}">${esc(option.title)}${project.checks[option.id] ? '<b aria-label="tested">✓</b>' : ''}</a>`).join('')}</details>`).join('')}</div>` : ''}`;
}
function renderHome() {
  return `<section class="hero"><div class="hero-copy"><span class="eyebrow">BRANCHING PATHWAYS · RASPBERRY PI PICO</span><h1>What will your alarm notice?</h1><p>Make an alarm that spots a change, warns someone and stops when you reset it. You choose what it watches.</p><div class="actions"><a class="button primary" href="${ready() ? '#hub' : '#step/1A'}">${ready() ? 'Choose a part' : 'Open the starter & test your Pico'} →</a></div><p class="small">Test your Pico first. Then make it yours.</p></div><div class="hero-art" aria-hidden="true"><div class="alarm-disk"><div class="alarm-light"></div><div class="alarm-base"></div></div><span class="spark spark-one">✦</span><span class="spark spark-two">✦</span><span class="hero-note">NOTICE<br>WARN<br>RESET</span></div></section><section class="choice-intro"><h2>After the Pico test, pick your path</h2><p>Craft a home. Try an input. Make a warning. Start anywhere and mix your ideas.</p><a href="#hub">See the choices →</a></section>`;
}
function renderHub() {
  const hints = {'Make a case':'Choose a shape or material.','Detect a change':'Pick what sets it off.','Give a warning':'Light, colour or sound?','Decide with code':'Change the alarm’s rules.','Bring it together':'Connect your choices.','Test and Improve':'Test, change, test again.','Ideas to borrow':'Take one idea and make it yours.'};
  return `<div class="page-head"><span class="eyebrow">PICO CHECKED · YOUR ROUTE</span><h1>Where will you start?</h1><p>Pick a part. You can change direction whenever you like.</p></div><p class="first-alarm">To finish a first alarm: try one input and one warning, then <a href="#step/6A">join them</a>.</p><div class="group-grid">${data.groups.filter(group => group.title !== 'Start here').map((group, index) => `<details class="group-card tone-${index % 5}"><summary><strong>${esc(group.title)}</strong><span aria-hidden="true">⌄</span></summary><p>${esc(hints[group.title] || '')}</p><div class="group-links">${group.options.map(option => `<a href="#step/${option.id}">${esc(option.title)}<span aria-hidden="true">↗</span></a>`).join('')}</div></details>`).join('')}</div>`;
}
function renderStep(id) {
  const page = data.pages[id];
  const group = data.groups.find(group => group.options.some(option => option.id === id));
  const setup = id === '1A';
  const returnBanner = returnTo && returnTo !== id && data.pages[returnTo] ? `<div class="return-banner">Come back to your idea when this part works. <a href="#step/${returnTo}" data-return>Return to ${esc(data.pages[returnTo].title)} →</a></div>` : '';
  return `<div class="page-head"><a class="back-link" href="${setup && !ready() ? '#home' : '#hub'}">← ${setup && !ready() ? 'Start' : 'Your choices'}</a><span class="eyebrow">${esc(group.title)}</span></div>${returnBanner}<article class="learner-page">${page.html}</article><section class="panel record"><h2>${setup ? 'Did your Pico pass the test?' : 'Keep track of this idea'}</h2><label class="check-row"><input id="page-check" type="checkbox" ${project.checks[id] ? 'checked' : ''}><span>${setup ? 'I saw the onboard LED and ready message on my real Pico.' : 'I tried this part on my Pico.'}</span></label>${setup ? '<p class="small">Tick this after the real board works. Then all choices open.</p>' : `<label class="note-label" for="page-note">My idea or change (optional)</label><textarea id="page-note" rows="3" placeholder="What will you try next?">${esc(project.notes[id] || '')}</textarea>`}<div class="actions"><a class="button primary" href="${setup ? '#hub' : '#hub'}">${setup ? 'Open the choices' : 'Choose another part'} →</a>${returnTo && returnTo !== id ? `<a class="button" href="#step/${returnTo}" data-return>Return to my earlier idea</a>` : ''}</div></section>`;
}
function render() {
  const route = currentRoute();
  const id = pageId();
  if (!ready() && route !== 'home' && id !== '1A') {
    pending = route;
    main.innerHTML = `<div class="page-head"><span class="eyebrow">START HERE</span><h1>Check your Pico first</h1><p>Open the starter and run its LED test on your Pico. Then every pathway is open.</p></div><div class="panel"><p>We’ll keep your place: <strong>${esc(id && data.pages[id] ? data.pages[id].title : 'your choices')}</strong>.</p><a class="button primary" href="#step/1A">Open the starter →</a></div>`;
  } else if (route === 'home') main.innerHTML = renderHome();
  else if (route === 'hub') main.innerHTML = renderHub();
  else main.innerHTML = renderStep(id);
  navigation();
  document.title = `${id && data.pages[id] ? data.pages[id].title : route === 'hub' ? 'Choose a part' : 'Pico Alarm'} · Branching pathways`;
}
document.addEventListener('click', async event => {
  const target = event.target;
  const copy = target.closest('.copy-code');
  if (copy) {
    const code = copy.closest('.code-wrap').querySelector('code').textContent;
    try {await navigator.clipboard.writeText(code); toast('Code copied.');}
    catch {toast('Select the code to copy it.');}
  }
  const link = target.closest('a');
  if (link?.hasAttribute('data-prereq') && pageId()) returnTo = pageId();
  if (link?.hasAttribute('data-return')) returnTo = null;
});
document.addEventListener('change', event => {
  if (event.target.id === 'page-check') {
    const id = pageId();
    project.checks[id] = event.target.checked;
    if (id === '1A') project.ready = event.target.checked;
    persist();
    if (id === '1A' && ready() && pending) {
      const destination = pending;
      pending = null;
      location.hash = destination;
    } else render();
  }
});
document.addEventListener('input', event => {
  if (event.target.id === 'page-note') {
    project.notes[pageId()] = event.target.value.slice(0, 10000);
    persist();
  }
});
document.querySelector('#save-project').addEventListener('click', () => download(JSON.stringify(project, null, 2), 'pico-alarm-project.json', 'application/json'));
document.querySelector('#open-project').addEventListener('click', () => document.querySelector('#project-file').click());
document.querySelector('#project-file').addEventListener('change', async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    if (file.size > 500000) throw Error('That project file is too large.');
    const next = restore(JSON.parse(await file.text()));
    download(JSON.stringify(project, null, 2), 'pico-alarm-before-import.json', 'application/json');
    project = next;
    persist();
    location.hash = ready() ? '#hub' : '#step/1A';
    render();
    toast('Project opened. Your previous work was downloaded.');
  } catch (error) {toast(error.message || 'Could not open that project. Your work is unchanged.');}
  event.target.value = '';
});
window.addEventListener('hashchange', () => {render(); window.scrollTo(0, 0); main.focus({preventScroll:true});});
try {
  const response = await fetch('data/pages.json?v=4');
  if (!response.ok) throw Error('Page data unavailable');
  data = await response.json();
  try {const saved = localStorage.getItem(KEY); if (saved) project = restore(JSON.parse(saved));}
  catch {toast('A saved copy could not be opened. You can import a project file.');}
  render();
} catch {
  main.innerHTML = '<h1>The pathway could not load</h1><p>Try reloading the page, or use the <a href="en/landing.md">Markdown project</a>.</p>';
}
