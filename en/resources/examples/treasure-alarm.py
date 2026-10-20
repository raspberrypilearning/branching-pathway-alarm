"""Example: warn when two foil contacts on a lid separate."""
from picozero import Button, LED
from time import sleep

lid = Button(10)
warning = LED(11)

while True:
    if not lid.is_pressed:
        warning.on()
    else:
        warning.off()
    sleep(0.05)
