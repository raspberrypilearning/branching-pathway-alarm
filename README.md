# Branching Pathway: Pico Alarm

Make an alarm that notices a change, gives a warning and can be reset. Learners choose what to notice, how to detect it, what the warning looks or sounds like, and what to build around the circuit. This is a separate branching pathway project from Build Lab and [Pico Musical Instrument](https://github.com/raspberrypilearning/branching-pathways-pico-instrument).

The learner material is Markdown in [`en/`](en/README.md), following the file structure of [Branching Pathways Platformer](https://github.com/raspberrypilearning/branching-pathways-platformer). `en/landing.md`, `en/pathways.yml`, `en/meta.yml` and 27 named route pages are the source. Matching `en/step_N.md` files serve project-format consumers. [`en/pathway-map.md`](en/pathway-map.md) includes a node for every learner page. The [GitHub Pages website](https://raspberrypilearning.github.io/branching-pathway-alarm/) is generated from those same route pages, with a parts hub, help return links, self-reported tests, notes and project-file export/import.

The sidebar suggests setup → detect → warning → code → case → test and improve. Only `1A - Connect and test your Pico` is required first. After that, learners may start with a case, an input, a warning or a rule. No later stage requires another stage to be completed. Component pages provide reusable wiring and code; Decide with code combines the tested input and output scripts, with optional worked examples. The code stage softly reminds learners to test both parts separately, with help links and no lock. The three named alarm ideas are optional examples, not prescribed builds.

## Editing and checking

Edit the named Markdown route, then synchronise its numbered copy:

```sh
python3 scripts/sync-pathway-files.py
python3 scripts/sync-pathway-files.py --check
python3 scripts/build-web.py
python3 scripts/build-web.py --check
python3 -m unittest discover -s tests -v
```

The checks compare the route manifest, metadata, flowchart, numbered copies and generated web pages; verify local links, copied diagrams, Skills Bricks snippets and Python syntax. The tests exercise example alarm rules with simulated components. A Pico and physical circuits still need classroom testing.

The site is static: GitHub Pages publishes the root of `main`. To preview it locally, run `python3 -m http.server 4186` and open `http://127.0.0.1:4186/`. The browser records a learner's own confirmation of the Pico test; it cannot inspect the board. Progress and notes are saved only in that browser unless the learner downloads a project copy. The website shows descriptive route names while the Markdown filenames retain their project-format IDs.

The [starter](en/resources/alarm.py) checks the Pico LED and picozero in Thonny before a learner picks a build route. Source and image provenance are in [SOURCES.md](SOURCES.md).
