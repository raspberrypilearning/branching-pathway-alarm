## 4A - LED

A single LED can give a bright, simple warning.

> [!CAUTION]
>
> Have you completed [1A - Connect and test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug before wiring.

## Wire it

> [!TASK]
>
> Use an LED and a **220 Ω resistor**. Connect **GP11 → resistor → long LED leg** and **short leg → GND**. The resistor must stay in the circuit.
>
> ![LED and resistor wiring from Skills Bricks](images/led-wiring.png)

## Try the code

> [!TASK]
>
> Try the [Skills Bricks LED code](https://raspberrypifoundation.github.io/skills-bricks/led/led-pico.html):
>
> ```python
> from picozero import LED
>
> led = LED(11)
>
> led.on()
> ```
>
> Add `led.off()` after looking at it. In your alarm, `if triggered:` can turn the LED on; `else:` can turn it off.

## Test

> [!TASK]
>
> Did it light? If not, check which leg is long, the resistor, GP11 and GND. Try placing it where a player can see it.

Choose when it warns on the [bring it together](6A%20-%20Join%20one%20input%20and%20warning.md) page.
