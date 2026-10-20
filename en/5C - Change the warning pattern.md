## 5C - Change the warning pattern

A warning can flash or beep in a pattern you invent.

> [!CAUTION]
>
> First [test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md), [one input](3A%20-%20Press%20or%20separate%20contacts.md) and [one warning](4A%20-%20Flash%20one%20LED.md). Test a plain on/off warning when you [join them](6A%20-%20Join%20one%20input%20and%20warning.md) before changing its rhythm.

## Step 1

> [!TASK]
>
> Keep the [Skills Bricks LED circuit](https://raspberrypifoundation.github.io/skills-bricks/led/led-pico.html): GP11, a 220 Ω resistor, LED, then GND.
>
> ![LED warning wiring from Skills Bricks](images/led-wiring.png)

## Step 2

> [!TASK]
>
> This flashes only while a GP10 button is pressed. The short sleep lets the Pico check the button again quickly.
>
> ```python
> from picozero import Button, LED
> from time import sleep
>
> trigger = Button(10)
> warning = LED(11)
> lit = False
>
> while True:
>     if trigger.is_pressed:
>         lit = not lit
>         if lit:
>             warning.on()
>         else:
>             warning.off()
>         sleep(0.2)
>     else:
>         warning.off()
>         lit = False
>         sleep(0.05)
> ```
>
> For sound, use a tested [active](4C%20-%20Sound%20an%20active%20buzzer.md) or [passive buzzer](4D%20-%20Make%20a%20warning%20tone.md) in place of the LED. Keep beeps short and comfortable.

## Test

> [!TASK]
>
> Try `0.1` and `0.5` seconds. Can someone tell when the alarm is warning? Does it stop soon after you reset it?
