## 4B - RGB LED

Mix red, green and blue light. You choose the colours and what they mean.

> [!CAUTION]
>
> Have you completed [1A - Connect and test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug before wiring. Use a common-cathode LED.

## Wire it

> [!TASK]
>
> Connect the R leg through **220 Ω to GP3**, G through **220 Ω to GP4**, B through **220 Ω to GP5**, and the common long leg to **GND**. Each colour needs its own resistor.
>
> ![RGB LED and three resistor wiring from Skills Bricks](images/rgb-led-wiring.png)

## Try the code

> [!TASK]
>
> Try the [Skills Bricks RGB LED code](https://raspberrypifoundation.github.io/skills-bricks/rgb-led/rgb-led-pico.html):
>
> ```python
> from picozero import RGBLED
>
> light = RGBLED(red=3, green=4, blue=5)
>
> light.color = (255, 0, 255)
> ```
>
> Try `light.color = (0, 255, 0)` for green or `(255, 0, 0)` for red. Each number goes from `0` to `255`. Use `light.off()` to switch it off.

## Test

> [!TASK]
>
> Can you make two colours that someone can tell apart? Put a label or shape beside the light so colour is not the only clue.

Choose when it warns on the [bring it together](6A%20-%20Join%20one%20input%20and%20warning.md) page.
