"""Example: warn when a hand is within 30 cm of a 3.3 V HC-SR04P."""
from picozero import DistanceSensor, RGBLED
from time import sleep

sensor = DistanceSensor(echo=21, trigger=20)
light = RGBLED(red=3, green=4, blue=5)

while True:
    distance = sensor.distance
    if distance is not None and distance < 0.3:
        light.color = (255, 0, 0)
    else:
        light.color = (0, 255, 0)
    sleep(0.1)
