## 3F - Ultrasonic distance sensor

Measure the distance to something in front of the sensor, without touching it.

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug it before wiring.

## Wire it

> [!TASK]
>
> Gather a 3.3 V-compatible HC-SR04P ultrasonic sensor and four leads.
>
> Trig goes to GP20, Echo to GP21, VCC to 3V3 OUT and GND to GND. Use the HC-SR04P, not a 5 V Echo module.
>
> ![Ultrasonic distance sensor wiring diagram from Skills Bricks](images/distance-wiring.png)

## Try the code

> [!TASK]
>
> Run the [Skills Bricks code](https://raspberrypifoundation.github.io/skills-bricks/distance/distance-pico.html) in Thonny:
>
> ```python
> from picozero import DistanceSensor
>
> sensor = DistanceSensor(
>     echo=21, trigger=20
> )
>
> distance = sensor.distance
> ```
>
> Add this to try a trigger. You can change the `if` line:
>
> ```python
> print(distance)
> if distance is not None and distance < 0.3:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Move an object nearer and further away, running again each time. Readings are in metres; `None` means no echo.

## Make it yours

Choose whether nearer or further away should trigger your alarm. Change `0.3` (30 cm) or `<`, keeping the `is not None` check.

Ready? [Connect it to your chosen warning](6A%20-%20Join%20one%20input%20and%20warning.md).
