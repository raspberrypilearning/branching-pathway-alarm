## 4C - Active buzzer

An **active** buzzer has one built-in pitch. You can change its beep rhythm. Check the packet for *active* or *built-in oscillator*.

> [!CAUTION]
>
> Have you completed [1A - Connect and test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Use a small **3.3 V GPIO-compatible** buzzer and unplug before wiring.

## Wire it

> [!TASK]
>
> Connect buzzer **+ → GP9** and **− → GND**.
>
> ![Active buzzer wiring from Skills Bricks](images/buzzer-wiring.png)

## Try the code

> [!TASK]
>
> Try the [Skills Bricks active-buzzer code](https://raspberrypifoundation.github.io/skills-bricks/buzzer/buzzer-pico.html):
>
> ```python
> from picozero import Buzzer
>
> buzzer = Buzzer(9)
>
> buzzer.on()
> from time import sleep
> sleep(0.25)
> buzzer.off()
> ```
>
> In an alarm, `if triggered:` can turn it on; `else:` can turn it off.

## Test

> [!TASK]
>
> Did you hear one steady pitch? Change the **length**, not its pitch, to make the warning yours. An active buzzer cannot play different notes.

Choose when it warns on the [bring it together](6A%20-%20Join%20one%20input%20and%20warning.md) page.
