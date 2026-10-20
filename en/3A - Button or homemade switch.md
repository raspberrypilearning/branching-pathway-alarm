## 3A - Button or homemade switch

Detect when two contacts meet or separate. Use a push button, foil or another homemade switch.

> [!CAUTION]
>
> Have you [tested your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md)? Unplug it before wiring.

## Wire it

> [!TASK]
>
> Gather a push button or foil and a card spacer.
>
> Connect GP10 through the switch to GND. A four-leg button has joined pairs: follow the picture.
>
> ![Button or homemade switch wiring diagram from Skills Bricks](images/button-wiring.png)

## Try the code

> [!TASK]
>
> Run the [Skills Bricks code](https://raspberrypifoundation.github.io/skills-bricks/button/button-pico.html) in Thonny:
>
> ```python
> from picozero import Button
>
> button = Button(10)
>
> pressed = button.is_pressed
> ```
>
> Add this to try a trigger. You can change the `if` line:
>
> ```python
> print(pressed)
> if pressed:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Press and release, or join and separate your contacts. Run the code each time: can you get both `True` and `False`?

## Make it yours

Should meeting or separating the contacts trigger your alarm? Use `if pressed:` or `if not pressed:`. You choose where the contacts go.

Ready? [Connect it to your chosen warning](6A%20-%20Connect%20your%20input%20and%20output.md).
