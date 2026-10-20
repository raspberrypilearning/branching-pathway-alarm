# Pico Alarm — starter project
# Open in Thonny with the MicroPython (Raspberry Pi Pico) interpreter.
# Save your own copy as alarm.py before adding your ideas.
from picozero import pico_led
from time import sleep

# First check: only a Pico and a USB data cable are needed.
pico_led.on()
sleep(1)
pico_led.off()
print("Pico and picozero are ready")

# YOUR ALARM
# Add your chosen input and warning code below.
# Test each component alone before joining the circuits.
