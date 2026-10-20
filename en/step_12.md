## 3H - Turn a dial

A dial can be a secret setting, a trigger or a sensitivity control.

> [!CAUTION]
>
> First complete [1A - Connect and test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md). You can explore this idea before wiring it.

## Step 1

> [!TASK]
>
> Gather a 10 kΩ potentiometer and three leads.
>
> One end goes to GND, the middle to GP26, and the other end to 3V3 OUT. Check your dial’s leg order.
>
> ![Turn a dial wiring diagram from Skills Bricks](images/potentiometer-wiring.png)

## Step 2

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
> Add this underneath to see when the component detects an event:
>
> ```python
> print(setting)
> if setting > 0.5:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Turn gently. Run again at different positions; the value should move between about 0 and 1. Change the number or reverse the `if` condition if your alarm needs the opposite action.

## Make it yours

Use it to choose the trigger distance or light level when you [choose a trigger](5A%20-%20Choose%20what%20counts%20as%20a%20trigger.md). When your test detects the event you want, [join it to a warning](6A%20-%20Join%20one%20input%20and%20warning.md).
