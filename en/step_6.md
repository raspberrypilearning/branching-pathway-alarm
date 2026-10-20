## 3E - Light sensor (LDR)

Measure how light or dark it is with a light-dependent resistor (LDR).

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug it before wiring.

## Wire it

> [!TASK]
>
> Gather an LDR, a 10 kΩ resistor and leads.
>
> Join the LDR and resistor at GP27. The LDR’s other leg goes to 3V3 OUT; the resistor’s other leg goes to GND.
>
> ![Light sensor (LDR) wiring diagram from Skills Bricks](images/ldr-wiring.png)

## Try the code

> [!TASK]
>
> Run the [Skills Bricks code](https://raspberrypifoundation.github.io/skills-bricks/ldr/ldr-pico.html) in Thonny:
>
> ```python
> from picozero import AnalogInputDevice
>
> ldr = AnalogInputDevice(27)
>
> light = ldr.value
> ```
>
> Add this to try a trigger. You can change the `if` line:
>
> ```python
> print(light)
> if light < 0.5:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Cover and uncover it, running the code each time. With this wiring, darker gives a lower value.

## Make it yours

Choose light or darkness as your trigger. Change `<` to `>` for a higher reading, then choose a number between your two test readings.

Ready? [Connect it to your chosen warning](6A%20-%20Connect%20your%20input%20and%20output.md).
