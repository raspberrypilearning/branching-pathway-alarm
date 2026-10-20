## 5A - Choose what counts as a trigger

Choose the rule that sets off your alarm. You can start by inventing it, then try it with any input.

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug before changing wires.

## Choose a rule

- **Yes or no:** a button is pressed, a pad is touched or a switch changes position.
- **Above or below:** a distance, light level or temperature passes a number you choose.

Write it as **“When ______, warn me.”** Your component page has an `if` line to adapt.

<details>
<summary>Try an example: a light-level rule</summary>

### Wire it

Use the [light sensor](3E%20-%20Light%20sensor%20%28LDR%29.md) circuit: LDR to 3V3, 10 kΩ resistor to GND, their join to GP27.

![LDR wiring from Skills Bricks](images/ldr-wiring.png)

### Try the code

This uses the [Skills Bricks LDR](https://raspberrypifoundation.github.io/skills-bricks/ldr/ldr-pico.html) setup. Run it in light and shade:

```python
from picozero import AnalogInputDevice

ldr = AnalogInputDevice(27)
light = ldr.value
print(light)
if light < 0.5:
    print("Warn me!")
```

Change `<` to `>` for more light. Choose a number between your two readings.

</details>

## Test

Try or act out both situations: one that should trigger your alarm and one that should not. Does your rule tell them apart?
