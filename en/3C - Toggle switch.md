## 3C - Toggle switch

Detect which way a toggle switch is set.

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug it before wiring.

## Wire it

> [!TASK]
>
> Gather an SPDT toggle switch and two leads.
>
> Connect COM (centre leg) to GP6 and one outside leg to GND. Leave the other outside leg unconnected.
>
> ![Toggle switch wiring diagram from Skills Bricks](images/toggle-switch-wiring.png)

## Try the code

> [!TASK]
>
> Run the [Skills Bricks code](https://raspberrypifoundation.github.io/skills-bricks/toggle-switch/toggle-switch-pico.html) in Thonny:
>
> ```python
> from picozero import Switch
>
> mode = Switch(6)
>
> mode_two = mode.is_closed
> ```
>
> Add this to try a trigger. You can change the `if` line:
>
> ```python
> print(mode_two)
> if mode_two:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Flip the switch each way and run again. Which position gives `True`?

## Make it yours

Choose its job: trigger a warning, [arm the alarm](5B%20-%20Arm%20and%20reset%20your%20alarm.md) or select a mode.

Ready? [Connect it to your chosen warning](6A%20-%20Join%20one%20input%20and%20warning.md).
