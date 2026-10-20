## 3G - Cross a marked line

A line sensor can detect a dark or light strip passing underneath.

> [!CAUTION]
>
> First complete [1A - Connect and test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md). You can explore this idea before wiring it.

## Step 1

> [!TASK]
>
> Gather a KY-033 line sensor, contrasting card and three leads.
>
> S goes to GP18, V+ to 3V3 OUT and G to GND.
>
> ![Pull a pattern through wiring diagram from Skills Bricks](images/line-sensor-wiring.png)

## Step 2

> [!TASK]
>
> Run the [Skills Bricks code](https://raspberrypifoundation.github.io/skills-bricks/line-sensor/line-sensor-pico.html) in Thonny:
>
> ```python
> from picozero import DigitalInputDevice
>
> line = DigitalInputDevice(18, pull_up=False)
>
> on_line = line.is_active
> ```
>
> Add this underneath to see when the component detects an event:
>
> ```python
> print(on_line)
> if on_line:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Move a marked strip under the sensor. Adjust its small dial until the reading changes. Change the number or reverse the `if` condition if your alarm needs the opposite action.

## Make it yours

Move a card tab with a drawer or door to reveal a new mark. When your test detects the event you want, [join it to a warning](6A%20-%20Join%20one%20input%20and%20warning.md).
