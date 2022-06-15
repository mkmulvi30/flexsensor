let value = 0
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P0)
    if (value > 965) {
        basic.showIcon(IconNames.Happy)
    } else if (value > 955 && value < 965) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
