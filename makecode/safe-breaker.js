let Eingegebene_Zahl = 0
let Rateversuche = 0
let Zu_erratende_Zahl = 0
input.onButtonPressed(Button.A, () => {
    if (Eingegebene_Zahl > 1) {
        Eingegebene_Zahl += -1
        basic.showNumber(Eingegebene_Zahl)
    }
})
input.onButtonPressed(Button.B, () => {
    if (Eingegebene_Zahl < 18) {
        Eingegebene_Zahl += 1
        basic.showNumber(Eingegebene_Zahl)
    }
})
input.onButtonPressed(Button.AB, () => {
    Rateversuche += 1
    if (Eingegebene_Zahl == Zu_erratende_Zahl) {
        basic.showIcon(IconNames.Yes)
        basic.showString("Rateversuche:")
        basic.showNumber(Rateversuche)
    } else {
        if (Eingegebene_Zahl < Zu_erratende_Zahl) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        }
        basic.showNumber(Eingegebene_Zahl)
    }
})
input.onGesture(Gesture.Shake, () => {
    Zu_erratende_Zahl = Math.random(18)
    Zu_erratende_Zahl += 1
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.pause(1000)
    Rateversuche = 0
    Eingegebene_Zahl = 9
    basic.showNumber(Eingegebene_Zahl)
})
Zu_erratende_Zahl = Math.random(18)
Zu_erratende_Zahl += 1
Rateversuche = 0
Eingegebene_Zahl = 9
basic.showNumber(Eingegebene_Zahl)