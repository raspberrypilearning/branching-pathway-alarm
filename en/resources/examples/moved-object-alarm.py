"""Example: sound an active buzzer while a tilted object is moved."""
from picozero import Switch, Buzzer
from time import sleep

tilt = Switch(8)
warning = Buzzer(9)

while True:
    if tilt.is_open:
        warning.on()
    else:
        warning.off()
    sleep(0.05)
