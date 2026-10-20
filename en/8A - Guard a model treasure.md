## 8A - Guard a model treasure

Borrow this idea, change it, or ignore it. A model chest could warn when its lid opens.

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug before wiring. Keep the 220 Ω resistor in the LED circuit.

## Step 1

> [!TASK]
>
> Put one foil contact on the lid and one on the box so they meet when shut. Treat them like the [Skills Bricks button](https://raspberrypifoundation.github.io/skills-bricks/button/button-pico.html): one to GP10, one to GND. Add an LED and 220 Ω resistor on GP11.
>
> ![Button-style contact wiring from Skills Bricks](images/button-wiring.png)
>
> ![LED wiring from Skills Bricks](images/led-wiring.png)

## Step 2

> [!TASK]
>
> Start with this idea from the [downloadable example](resources/examples/treasure-alarm.py):
>
> ```python
> from picozero import Button, LED
> from time import sleep
>
> lid = Button(10)
> warning = LED(11)
> while True:
>     if not lid.is_pressed:  # foil contacts are apart
>         warning.on()
>     else:
>         warning.off()
>     sleep(0.05)
> ```

## Test

> [!TASK]
>
> Close the lid, then lift it. The LED should warn when contacts separate. If the contacts do not meet reliably, move them or add a small card flap. What else could a pair of contacts watch?
