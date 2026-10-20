## 3C - Flip a switch

A toggle can trigger the alarm or arm it.

> [!CAUTION]
>
> First complete [1A - Connect and test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md). You can explore this idea before wiring it.

## Step 1

> [!TASK]
>
> Gather an SPDT toggle switch and two leads.
>
> Connect COM (centre leg) to GP6 and one outside leg to GND. Leave the other outside leg unconnected.
>
> ![Flip a switch wiring diagram from Skills Bricks](images/toggle-switch-wiring.png)

## Step 2

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
> Add this underneath to see when the component detects an event:
>
> ```python
> print(mode_two)
> if mode_two:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Flip the switch each way and run again. Use it to choose an armed mode. Change the number or reverse the `if` condition if your alarm needs the opposite action.

## Make it yours

Use this as an arm switch on the [arm and reset](5B%20-%20Arm%20and%20reset%20your%20alarm.md) page, or treat a flipped switch as the event. When your test detects the event you want, [join it to a warning](6A%20-%20Join%20one%20input%20and%20warning.md).
