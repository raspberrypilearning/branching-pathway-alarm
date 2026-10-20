## 7A - Try it and improve it

Let someone else test your alarm without showing them how it works first.

> [!CAUTION]
>
> Have you [connected and tested the Pico](1A%20-%20Connect%20and%20test%20your%20Pico.md) and made [one complete alarm](6A%20-%20Join%20one%20input%20and%20warning.md)? Finish those before judging the whole design.

## Step 1

> [!TASK]
>
> Show your tester how to arm or reset it. Ask them to trigger it three times. Watch for: a missed trigger, a false warning, a warning they cannot notice, or a hard-to-reach reset.

## Step 2

> [!TASK]
>
> Change **one** thing: position, threshold, wiring, code or warning pattern. The [Skills Bricks button](3A%20-%20Press%20or%20separate%20contacts.md) and [LED](4A%20-%20Flash%20one%20LED.md) diagrams are here if you need to retrace the first example.
>
> ![Button wiring from Skills Bricks](images/button-wiring.png)
>
> ```python
> if trigger.is_pressed:
>     warning.on()
> else:
>     warning.off()
> ```

## Test

> [!TASK]
>
> Run the same three tests again. What improved? If a false warning remains, adjust where the sensor sits or the condition after `if`.

> Give your alarm a name and show which choice made it yours.
