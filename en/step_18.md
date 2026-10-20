## 5B - Arm and reset your alarm

**Arm** means ready to detect. **Reset** means stop the warning. Choose how yours should work.

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug before wiring; use a separate GP pin for each part.

## Choose what happens

Your alarm could always be ready, or wait for a switch or touch. Its warning could stop when the trigger goes away, or wait for a reset action.

Try acting out the rule you want. You can design it before choosing components.

<details>
<summary>Try an example: an arm switch, button and LED</summary>

### Wire it

Switch: COM to GP6, one outside leg to GND. Button: GP10 to GND. LED: GP11 through 220 Ω to its long leg, short leg to GND.

![Toggle switch wiring from Skills Bricks](images/toggle-switch-wiring.png)

![Button wiring from Skills Bricks](images/button-wiring.png)

![LED wiring from Skills Bricks](images/led-wiring.png)

### Try the code

Here, the switch arms the alarm. Releasing the button or disarming stops the warning.

```python
from picozero import Switch, Button, LED
from time import sleep

arm = Switch(6)
trigger = Button(10)
warning = LED(11)

while True:
    if arm.is_closed and trigger.is_pressed:
        warning.on()
    else:
        warning.off()
    sleep(0.05)
```

Use your chosen input’s reading and warning action to change this rule.

</details>

## Test

Try or act out your trigger and reset. If you have an arm control, what happens when the alarm is disarmed?
