## 5A - Choose what counts as a trigger

Your alarm decides when a reading is *enough* to warn someone. Choose your own line.

> [!CAUTION]
>
> First [test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md) and [test the input](3E%20-%20Watch%20the%20light.md) you want to use. A reading from an untested sensor can make the alarm seem broken.

## Step 1

> [!TASK]
>
> Here is the [Skills Bricks light-sensor circuit](https://raspberrypifoundation.github.io/skills-bricks/ldr/ldr-pico.html). Read your own sensor in its usual place, then while you trigger it.
>
> ![LDR wiring from Skills Bricks](images/ldr-wiring.png)

## Step 2

> [!TASK]
>
> Put your trigger value between those two readings. For an LDR wired as shown, darker usually gives a smaller number:
>
> ```python
> from picozero import AnalogInputDevice
>
> ldr = AnalogInputDevice(27)
> if ldr.value < 0.5:
>     print("Too dark: warn someone!")
> ```
>
> Use `>` to notice a lid opening into light. For another sensor, keep its wiring and reading from its page; change only the test inside `if`.

## Test

> [!TASK]
>
> Try the ordinary situation and the trigger three times each. Adjust `0.5` until the message appears only when you want it. Then [join it to a warning](6A%20-%20Join%20one%20input%20and%20warning.md).
