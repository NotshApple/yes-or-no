let score = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showNumber(score)
})
input.onSound(DetectedSound.Loud, function () {
    score += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
