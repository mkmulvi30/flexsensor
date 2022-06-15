let value = 0
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P0)
    if (value > 500) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.South)
    }
})
