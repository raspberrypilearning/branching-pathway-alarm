## 3B - Touch sensor

Detect a finger touching a pad with a TTP223 module.

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug it before wiring.

## Wire it

> [!TASK]
>
> Gather a TTP223 touch module and three leads.
>
> SIG goes to GP17, VCC to 3V3 OUT, and GND to GND.
>
> ![Touch sensor wiring diagram from Skills Bricks](images/capacitive-touch-wiring.png)

## Try the code

> [!TASK]
>
> Run the [Skills Bricks code](https://raspberrypifoundation.github.io/skills-bricks/capacitive-touch/capacitive-touch-pico.html) in Thonny:
>
> ```python
> from picozero import TouchSensor
>
> touch = TouchSensor(17)
>
> touched = touch.is_touched
> ```
>
> Add this to try a trigger. You can change the `if` line:
>
> ```python
> print(touched)
> if touched:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Touch and release the pad. Run the code each time: can you get both `True` and `False`?

## Make it yours

Choose what touch does: trigger the warning, arm it or reset it. Bare foil contacts use the [homemade switch](3A%20-%20Button%20or%20homemade%20switch.md) circuit.

Ready? [Connect it to your chosen warning](6A%20-%20Connect%20your%20input%20and%20output.md).
