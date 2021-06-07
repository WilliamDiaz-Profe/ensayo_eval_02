basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() > 25) {
        basic.showNumber(0)
        basic.showIcon(IconNames.Happy)
    }
})
