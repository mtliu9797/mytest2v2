radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(168)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        basic.showIcon(IconNames.Yes)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
        basic.showIcon(IconNames.No)
    }
})
