# Pico Alarm pathway files

This directory follows [Branching Pathways Platformer](https://github.com/raspberrypilearning/branching-pathways-platformer): `landing.md`, `pathways.yml`, `meta.yml`, named route Markdown, numbered `step_N.md` copies, images, code and resources. Group titles organise the menu; they are not separate pages.

Edit a named route file and run `python3 scripts/sync-pathway-files.py` at the repository root. `--check` verifies the numbered copies, metadata, links, snippets, flowchart and Python syntax. [`pathway-map.md`](pathway-map.md) contains the page-level flowchart; [`step-prerequisites.md`](step-prerequisites.md) explains useful test warnings.

`1A` is the only required start. All other groups can be visited in any order. `8A`–`8C` are optional ideas, not fixed alarm pathways. `images/` contains Skills Bricks wiring diagrams and setup pictures. `resources/alarm.py` is the MicroPython starter. There is no single finished solution, so `solutions/` is reserved for any future teacher material.

These files have been checked locally. They have not yet been checked in a live Raspberry Pi Projects renderer or with a physical Pico. See [SOURCES.md](../SOURCES.md) for attribution.

The repository-root website is generated from these canonical Markdown pages with `python3 scripts/build-web.py`; edit these pages, then run the sync and web-build scripts before publishing.
