## 3A - Press or separate contacts

A press or two pieces of foil meeting can tell an alarm that something opened or moved.

> [!CAUTION]
>
> First complete [1A - Connect and test your Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md). You can explore this idea before wiring it.

## Step 1

> [!TASK]
>
> Gather a push button or foil and a card spacer.
>
> Connect GP10 through the switch to GND. A four-leg button has joined pairs: follow the picture.
>
> ![Press or squeeze wiring diagram from Skills Bricks](images/button-wiring.png)

## Step 2

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
> Add this underneath to see when the component detects an event:
>
> ```python
> print(pressed)
> if pressed:
>     print("Alarm trigger detected!")
> ```

## Test

> [!TASK]
>
> Press and release. Run the code each time and look for True and False. Keep foil apart until pressed. Change the number or reverse the `if` condition if your alarm needs the opposite action.

## Make it yours

A flap, lid or door can close your switch. When your test detects the event you want, [join it to a warning](6A%20-%20Join%20one%20input%20and%20warning.md).
