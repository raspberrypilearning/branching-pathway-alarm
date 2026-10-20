## 3G - Line sensor

Detect a change between a light and dark surface with a KY-033 sensor.

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug it before wiring.

## Wire it

> [!TASK]
>
> Gather a KY-033 line sensor, contrasting card and three leads.
>
> S goes to GP18, V+ to 3V3 OUT and G to GND.
>
> ![Line sensor wiring diagram from Skills Bricks](images/line-sensor-wiring.png)

## Try the code

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
> Add this to try a trigger. You can change the `if` line:
>
> ```python
> print(on_line)
> if on_line:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Try a light and dark surface under the sensor, running again each time. Adjust its small dial until the reading changes.

## Make it yours

Choose which surface should trigger your alarm. Try `if on_line:` or `if not on_line:`; you choose what moves past the sensor.

Ready? [Connect it to your chosen warning](6A%20-%20Connect%20your%20input%20and%20output.md).
