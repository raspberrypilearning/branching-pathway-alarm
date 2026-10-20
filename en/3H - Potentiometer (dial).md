## 3H - Potentiometer (dial)

Turn a dial to give the Pico a reading between about 0 and 1.

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug it before wiring.

## Wire it

> [!TASK]
>
> Gather a 10 kΩ potentiometer and three leads.
>
> One end goes to GND, the middle to GP26, and the other end to 3V3 OUT. Check your dial’s leg order.
>
> ![Potentiometer (dial) wiring diagram from Skills Bricks](images/potentiometer-wiring.png)

## Try the code

> [!TASK]
>
> Run the [Skills Bricks code](https://raspberrypifoundation.github.io/skills-bricks/potentiometer/potentiometer-pico.html) in Thonny:
>
> ```python
> from picozero import Pot
>
> pot = Pot(26)
>
> setting = pot.value
> ```
>
> Add this to try a trigger. You can change the `if` line:
>
> ```python
> print(setting)
> if setting > 0.5:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Turn gently and run again at different positions. What are your lowest and highest readings?

## Make it yours

Use the dial as a trigger, or let it adjust how sensitive another sensor is. You choose what the setting means.

Ready? [Connect it to your chosen warning](6A%20-%20Connect%20your%20input%20and%20output.md).
