## 3I - Notice warmth

A temperature sensor can notice a slow change in warmth.

> [!CAUTION]
>
> First complete [1A - Connect and test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md). You can explore this idea before wiring it.

## Step 1

> [!TASK]
>
> Gather a TMP36 sensor and three leads.
>
> Flat face towards you: left to 3V3, centre to GP28, right to GND. Keep the legs apart.
>
> ![Play with warmth wiring diagram from Skills Bricks](images/temperature-sensor-wiring.png)

## Step 2

> [!TASK]
>
> Run the [Skills Bricks code](https://raspberrypifoundation.github.io/skills-bricks/temperature-sensor/temperature-sensor-pico.html) in Thonny:
>
> ```python
> from picozero import TemperatureSensor
>
> convert = lambda voltage: (voltage - 0.5) * 100
> sensor = TemperatureSensor(28, conversion=convert)
>
> temperature = sensor.temp
> ```
>
> Add this underneath to see when the component detects an event:
>
> ```python
> print(temperature)
> if temperature > 25:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Read the room temperature, then warm the sensor gently with your fingers. Change the number or reverse the `if` condition if your alarm needs the opposite action.

## Make it yours

Use it for a warm/cool exhibit; set a threshold different from room temperature. When your test detects the event you want, [join it to a warning](6A%20-%20Join%20one%20input%20and%20warning.md).
