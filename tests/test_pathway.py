"""Check generated pages and the observable behaviour of three example alarms."""

from __future__ import annotations

import builtins
import json
import re
import types
import unittest
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class WebsiteTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.data = json.loads((ROOT / "data/pages.json").read_text())

    def test_every_route_is_a_page_with_descriptive_title(self):
        options = [option for group in self.data["groups"] for option in group["options"]]
        self.assertEqual(len(options), 27)
        self.assertEqual(set(self.data["pages"]), {option["id"] for option in options})
        for option in options:
            with self.subTest(option=option["id"]):
                self.assertNotRegex(option["title"], r"^\d+[A-Z] - ")
                page = self.data["pages"][option["id"]]
                self.assertIn("<h1>" + option["title"] + "</h1>", page["html"])
                self.assertIn("<h2>Test</h2>", page["html"])

    def test_all_embedded_local_images_exist(self):
        for route, page in self.data["pages"].items():
            for target in re.findall(r'<img src="([^"]+)"', page["html"]):
                with self.subTest(route=route, image=target):
                    self.assertTrue((ROOT / target).is_file())

    def test_section_layout_keeps_every_instruction_link_and_code_block(self):
        class Content(HTMLParser):
            def __init__(self, source):
                super().__init__()
                self.words = []
                self.links = []
                self.feed(source)

            def handle_data(self, value):
                self.words.extend(value.split())

            def handle_starttag(self, tag, attrs):
                if tag in ("a", "img"):
                    self.links.append((tag, dict(attrs)))

        for route, page in self.data["pages"].items():
            with self.subTest(route=route):
                laid_out = "<h1>" + page["title"] + "</h1>" + page["intro"]
                laid_out += "".join("<h2>" + section["title"] + "</h2>" + section["html"]
                                    for section in page["sections"])
                original, presented = Content(page["html"]), Content(laid_out)
                self.assertEqual(original.words, presented.words)
                self.assertEqual(original.links, presented.links)

    def test_all_components_have_local_preview_images(self):
        component_groups = [g for g in self.data["groups"] if g["slug"] in ("detect", "warning")]
        options = [option for group in component_groups for option in group["options"]]
        self.assertEqual(len(options), 14)
        for option in options:
            with self.subTest(option=option["id"]):
                self.assertTrue((ROOT / "images/components" / option["image"]).is_file())

    def test_gate_and_warning_copy_are_present(self):
        script = (ROOT / "app.js").read_text()
        self.assertIn("const ready = () => project.ready && project.checks['1A']", script)
        self.assertIn("Check your Pico first", script)
        self.assertIn('class="callout caution"', self.data["pages"]["3A"]["html"])
        style = (ROOT / "styles.css").read_text()
        self.assertIn(".callout.caution{background:var(--pink);border:2px solid var(--red)", style)


class ExampleTests(unittest.TestCase):
    def run_example(self, name, readings, input_class, input_property, output_class, output_property):
        state = {"tick": 0, "writes": []}

        class Input:
            def __init__(self, *args, **kwargs):
                pass

            @property
            def value(self):
                return readings[state["tick"]]

        class Output:
            def __init__(self, *args, **kwargs):
                pass

            def on(self):
                state["writes"].append((state["tick"], True))

            def off(self):
                state["writes"].append((state["tick"], False))

            @property
            def color(self):
                return None

            @color.setter
            def color(self, value):
                state["writes"].append((state["tick"], value))

        setattr(Input, input_property, Input.value)
        picozero = types.SimpleNamespace(**{input_class: Input, output_class: Output})

        def sleep(_seconds):
            state["tick"] += 1
            if state["tick"] == len(readings):
                raise StopIteration

        original_import = builtins.__import__

        def fake_import(module, *args, **kwargs):
            if module == "picozero":
                return picozero
            if module == "time":
                return types.SimpleNamespace(sleep=sleep)
            return original_import(module, *args, **kwargs)

        source = (ROOT / "en/resources/examples" / name).read_text()
        with self.assertRaises(StopIteration):
            exec(compile(source, name, "exec"), {"__builtins__": {**vars(builtins), "__import__": fake_import}})
        return [value for _, value in state["writes"]]

    def test_treasure_warns_on_open_lid_then_resets(self):
        self.assertEqual(self.run_example("treasure-alarm.py", [True, False, True], "Button", "is_pressed", "LED", "state"), [False, True, False])

    def test_visitor_warns_only_on_near_valid_echo(self):
        self.assertEqual(self.run_example("visitor-alarm.py", [None, 0.2, 0.4], "DistanceSensor", "distance", "RGBLED", "color"), [(0, 255, 0), (255, 0, 0), (0, 255, 0)])

    def test_moved_object_warns_while_tilted(self):
        self.assertEqual(self.run_example("moved-object-alarm.py", [False, True, False], "Switch", "is_open", "Buzzer", "state"), [False, True, False])


if __name__ == "__main__":
    unittest.main()
