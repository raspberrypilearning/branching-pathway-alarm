## 8B - Notice a visitor

Borrow this idea for a model shop, doorway or secret exhibit: warn when a hand gets close.

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug before wiring. Use a 3.3 V-compatible HC-SR04P; do not connect a 5 V Echo pin to a Pico GPIO.

## Step 1

> [!TASK]
>
> Use the Skills Bricks circuits: sensor trigger GP20, echo GP21; RGB LED GP3/4/5 with one resistor per colour.
>
> ![Distance sensor wiring from Skills Bricks](images/distance-wiring.png)
>
> ![RGB LED wiring from Skills Bricks](images/rgb-led-wiring.png)

## Step 2

> [!TASK]
>
> This [downloadable example](resources/examples/visitor-alarm.py) uses green for ready and red when something is within 30 cm:
>
> ```python
> from picozero import DistanceSensor, RGBLED
> from time import sleep
>
> sensor = DistanceSensor(echo=21, trigger=20)
> light = RGBLED(red=3, green=4, blue=5)
> while True:
>     distance = sensor.distance
>     if distance is not None and distance < 0.3:
>         light.color = (255, 0, 0)
>     else:
>         light.color = (0, 255, 0)
>     sleep(0.1)
> ```

## Test

> [!TASK]
>
> Approach from different angles. Does 30 cm work for your design? Change `0.3` after checking what the sensor actually reads.
