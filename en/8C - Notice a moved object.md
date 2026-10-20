## 8C - Notice a moved object

Borrow this idea for a model artefact that complains when someone picks it up.

> [!CAUTION]
>
> Complete the [Pico test](1A%20-%20Connect%20and%20test%20your%20Pico.md), then test the [tilt switch](3D%20-%20Tip%20or%20move%20it.md) and [active buzzer](4C%20-%20Sound%20an%20active%20buzzer.md) separately. Use a small 3.3 V GPIO-compatible buzzer.

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
