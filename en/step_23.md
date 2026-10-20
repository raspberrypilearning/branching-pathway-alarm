## 6B - Add another input or warning

One input and one warning are enough. Add a second part only if it improves your idea.

> [!CAUTION]
>
> First make [one input and warning](6A%20-%20Join%20one%20input%20and%20warning.md) work. Test every new part on its own. Unplug before changing wiring; check that the GP pins do not clash.

## Step 1

> [!TASK]
>
> This example adds a tilt switch on GP8 and an active buzzer on GP9 to a button on GP10 and LED on GP11. Use the wiring from each Skills Bricks page.
>
> ![Tilt input wiring from Skills Bricks](images/tilt-switch-wiring.png)
>
> ![Active buzzer wiring from Skills Bricks](images/buzzer-wiring.png)

## Step 2

> [!TASK]
>
> `or` makes either input trigger both warnings:
>
> ```python
> from picozero import Button, Switch, LED, Buzzer
> from time import sleep
>
> button = Button(10)
> tilt = Switch(8)
> light = LED(11)
> sound = Buzzer(9)
>
> while True:
>     if button.is_pressed or tilt.is_open:
>         light.on()
>         sound.on()
>     else:
>         light.off()
>         sound.off()
>     sleep(0.05)
> ```
>
> Change `or` to `and` only if **both** events should be needed. If you chose another component, use its reading from its page.

## Test

> [!TASK]
>
> Try each input alone, then both together. Move the tilt back and release the button to reset. If it keeps warning, check which position makes `tilt.is_open` true.
