## 3F - Notice someone nearby

A distance sensor can notice an approaching hand without contact.

> [!CAUTION]
>
> First complete [1A - Connect and test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md). You can explore this idea before wiring it.

## Step 1

> [!TASK]
>
> Gather a 3.3 V-compatible HC-SR04P ultrasonic sensor and four leads.
>
> Trig goes to GP20, Echo to GP21, VCC to 3V3 OUT and GND to GND. Use the HC-SR04P, not a 5 V Echo module.
>
> ![Distance sensor wiring diagram from Skills Bricks](images/distance-wiring.png)

## Step 2

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
> Add this underneath to see when the component detects an event:
>
> ```python
> print(distance)
> if distance is not None and distance < 0.3:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Move your hand in front of the two round parts. The number is metres; None means no echo. Change the number or reverse the `if` condition if your alarm needs the opposite action.

## Make it yours

Choose how close someone must get before the warning starts. When your test detects the event you want, [join it to a warning](6A%20-%20Join%20one%20input%20and%20warning.md).
