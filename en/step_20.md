## 5B - Arm and reset your alarm

Add an **arm switch** so your alarm only watches for a trigger when you choose.

> [!CAUTION]
>
> First [test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md), [toggle switch](3C%20-%20Flip%20a%20switch.md), [trigger input](3A%20-%20Press%20or%20separate%20contacts.md) and [warning](4A%20-%20Flash%20one%20LED.md). Unplug before joining circuits.

## Step 1

> [!TASK]
>
> Keep the [Skills Bricks switch wiring](https://raspberrypifoundation.github.io/skills-bricks/toggle-switch/toggle-switch-pico.html): COM to GP6, one outside leg to GND.
>
> ![Arm switch wiring from Skills Bricks](images/toggle-switch-wiring.png)

## Step 2

> [!TASK]
>
> This example uses a button on GP10 and an LED on GP11. The warning stops when you disarm **or** release the button; that is its reset.
>
> ```python
> from picozero import Switch, Button, LED
> from time import sleep
>
> arm = Switch(6)
> trigger = Button(10)
> warning = LED(11)
>
> while True:
>     if arm.is_closed and trigger.is_pressed:
>         warning.on()
>     else:
>         warning.off()
>     sleep(0.05)
> ```

## Test

> [!TASK]
>
> Try all four combinations: armed/disarmed and button pressed/released. Decide whether your alarm should reset automatically like this, or need a separate reset action.
