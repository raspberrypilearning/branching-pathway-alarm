## 6A - Join one input and warning

Now make a first working alarm: **notice something → warn → reset**. This button-and-LED example is a starting point; swap in your choices.

> [!CAUTION]
>
> First [test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md), [input](3A%20-%20Press%20or%20separate%20contacts.md) and [warning](4A%20-%20Flash%20one%20LED.md) separately. Unplug before combining wiring. Give each part its own GP pin.

## Step 1

> [!TASK]
>
> Wire the Skills Bricks button between **GP10 and GND**. Wire the LED from **GP11 through a 220 Ω resistor** to its long leg, then its short leg to GND. The circuits share GND.
>
> ![Button input wiring from Skills Bricks](images/button-wiring.png)
>
> ![LED warning wiring from Skills Bricks](images/led-wiring.png)

## Step 2

> [!TASK]
>
> Add this below the starter test in your saved `alarm.py`:
>
> ```python
> from picozero import Button, LED
> from time import sleep
>
> trigger = Button(10)
> warning = LED(11)
>
> while True:
>     if trigger.is_pressed:
>         warning.on()
>     else:
>         warning.off()
>     sleep(0.05)
> ```
>
> For your own parts, keep their exact setup and reading from their Skills Bricks pages. Put your condition after `if`, and your warning action inside it.

## Test

> [!TASK]
>
> Press: warning on. Release: warning off. That release is the reset. If yours warns at the wrong time, swap the `if` condition or adjust its threshold.
