## 8C - Notice a moved object

Borrow this idea for a model artefact that complains when someone picks it up.

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug before wiring. Use a small 3.3 V GPIO-compatible buzzer.

## Step 1

> [!TASK]
>
> Connect the tilt switch between GP8 and GND, and the active buzzer + to GP9 and − to GND.
>
> ![Tilt switch wiring from Skills Bricks](images/tilt-switch-wiring.png)
>
> ![Active buzzer wiring from Skills Bricks](images/buzzer-wiring.png)

## Step 2

> [!TASK]
>
> The [downloadable example](resources/examples/moved-object-alarm.py) sounds while the switch is open:
>
> ```python
> from picozero import Switch, Buzzer
> from time import sleep
>
> tilt = Switch(8)
> warning = Buzzer(9)
> while True:
>     if tilt.is_open:
>         warning.on()
>     else:
>         warning.off()
>     sleep(0.05)
> ```

## Test

> [!TASK]
>
> Move and replace the object. The switch can rattle, so find a position where it is settled when the object rests. Do you want the opposite angle to be the trigger?
