## 3E - Watch the light

A shadow or sudden light can show that a cover has moved.

> [!CAUTION]
>
> First complete [1A - Connect and test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md). You can explore this idea before wiring it.

## Step 1

> [!TASK]
>
> Gather an LDR, a 10 kΩ resistor and leads.
>
> Join the LDR and resistor at GP27. The LDR’s other leg goes to 3V3 OUT; the resistor’s other leg goes to GND.
>
> ![Light sensor wiring diagram from Skills Bricks](images/ldr-wiring.png)

## Step 2

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
> Add this underneath to see when the component detects an event:
>
> ```python
> print(light)
> if light < 0.5:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Cover and uncover it. With this wiring, darker gives a lower value. Change the number or reverse the `if` condition if your alarm needs the opposite action.

## Make it yours

Hide it in a box to notice an opened lid: change `<` to `>` so light triggers it. When your test detects the event you want, [join it to a warning](6A%20-%20Join%20one%20input%20and%20warning.md).
