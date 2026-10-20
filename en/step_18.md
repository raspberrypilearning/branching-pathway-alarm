## 5C - Change the warning pattern

Invent a flash or beep pattern. Start with the warning itself; you can add an input whenever you like.

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug before wiring. Keep beeps short and comfortable.

## Try a rhythm

Tap it out. Long or short? Fast or slow? Choose a pattern someone will notice.

<details>
<summary>Try an example: a flashing LED</summary>

### Wire it

Use the [Skills Bricks LED circuit](https://raspberrypifoundation.github.io/skills-bricks/led/led-pico.html): GP11 through a 220 Ω resistor to the long LED leg; short leg to GND.

![LED wiring from Skills Bricks](images/led-wiring.png)

### Try the code

```python
from picozero import LED
from time import sleep

warning = LED(11)
for flash in range(4):
    warning.on()
    sleep(0.2)
    warning.off()
    sleep(0.3)
```

Change the two times or the number of flashes. For beeps, use the setup and wiring for your [active buzzer](4C%20-%20Active%20buzzer.md) or [passive buzzer](4D%20-%20Passive%20buzzer.md) instead.

</details>

## Test

Try the pattern, or tap it to someone. Can they notice it? Once it is part of your alarm, check how quickly it stops when you reset it.
