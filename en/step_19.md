## 6A - Join one input and warning

Choose any input and any warning. Decide: **when this happens, do that**.

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug before wiring. Give each signal its own GP pin; the circuits can share GND.

## Combine your choices

- Use the wiring diagrams for the parts you chose.
- Put their imports and setup lines at the top of `alarm.py`.
- Inside `while True:`, read your input and use its `if` line to start your warning. Use `else:` to stop it when the trigger goes away.

Keep taking a new reading inside the loop so your alarm can notice changes.

<details>
<summary>Try an example: a button and LED</summary>

### Wire it

Button: GP10 to GND. LED: GP11 through a 220 Ω resistor to its long leg; short leg to GND.

![Button input wiring from Skills Bricks](images/button-wiring.png)

![LED warning wiring from Skills Bricks](images/led-wiring.png)

### Try the code

Add this below the starter test in your saved `alarm.py`:

```python
from picozero import Button, LED
from time import sleep

button = Button(10)
led = LED(11)

while True:
    pressed = button.is_pressed
    if pressed:
        led.on()
    else:
        led.off()
    sleep(0.05)
```

For your own parts, use their setup, reading and warning commands. Keep the indentation and short pause.

</details>

## Test

Try your rule, or act it out while you plan. What should start the warning? What should stop it? If a part does not respond, its component page has a small test to help.
