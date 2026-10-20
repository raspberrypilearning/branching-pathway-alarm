## 3J - Check warm or cool

A sealed probe can compare warm and cool water slowly.

> [!CAUTION]
>
> First complete [1A - Connect and test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md). You can explore this idea before wiring it.

## Step 1

> [!TASK]
>
> Gather a sealed DS18B20 probe, a 4.7 kΩ resistor and leads.
>
> VDD goes to 3V3, DQ to GP22, GND to GND. Put 4.7 kΩ between DQ and 3V3. Check your probe’s wire colours.
>
> ![Explore warm and cool wiring diagram from Skills Bricks](images/temperature-probe-wiring.png)

## Step 2

> [!TASK]
>
> Run the [Skills Bricks code](https://raspberrypifoundation.github.io/skills-bricks/temperature-probe/temperature-probe-pico.html) in Thonny:
>
> ```python
> from machine import Pin
> import onewire, ds18x20
> from time import sleep_ms
>
> bus = onewire.OneWire(Pin(22))
> sensor = ds18x20.DS18X20(bus)
> probes = sensor.scan()
> assert probes, "Check probe wiring"
> sensor.convert_temp()
> sleep_ms(750)
> temperature = sensor.read_temp(probes[0])
> print(temperature)
> ```
>
> Add this underneath to see when the component detects an event:
>
> ```python
> if temperature > 25:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Wait for each new reading. Only the sealed tip goes in water; keep the Pico and connections dry. Change the number or reverse the `if` condition if your alarm needs the opposite action.

## Make it yours

Make a warm/cool warning experiment; a probe needs time to change. When your test detects the event you want, [join it to a warning](6A%20-%20Join%20one%20input%20and%20warning.md).
