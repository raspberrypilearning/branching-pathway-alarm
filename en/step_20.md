## 6B - Add another input or warning

Give each part a job. Two inputs could trigger one warning, or one input could trigger lights and sound.

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug before wiring. Give each signal its own GP pin; the circuits can share GND.

## Choose a rule

Use `or` if **either** input should trigger the warning. Use `and` if **both** must happen. You can choose your parts and rule here, even if you have not built anything yet.

<details>
<summary>Try an example: two inputs, light and sound</summary>

### Wire it

Button: GP10 to GND. Tilt switch: GP8 to GND. Active buzzer: + to GP9, − to GND. LED: GP11 through 220 Ω to its long leg, short leg to GND.

![Button wiring from Skills Bricks](images/button-wiring.png)

![Tilt input wiring from Skills Bricks](images/tilt-switch-wiring.png)

![Active buzzer wiring from Skills Bricks](images/buzzer-wiring.png)

![LED wiring from Skills Bricks](images/led-wiring.png)

### Try the code

Either input triggers both warnings:

```python
from picozero import Button, Switch, LED, Buzzer
from time import sleep

button = Button(10)
tilt = Switch(8)
light = LED(11)
sound = Buzzer(9)

while True:
    if button.is_pressed or tilt.is_open:
        light.on()
        sound.on()
    else:
        light.off()
        sound.off()
    sleep(0.05)
```

Use your components’ setup, readings and actions in place of these. Change `or` to `and` to try a different rule.

</details>

## Test

Try or act out each input alone, then together. Do the warnings match your rule? What should happen when neither input is triggered?
