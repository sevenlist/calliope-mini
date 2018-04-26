let Würfelzahl = 0
input.onGesture(Gesture.Shake, () => {
    Würfelzahl = Math.random(3)
    if (Würfelzahl == 0) {
        basic.showLeds(`
            . . . # .
            # . # . .
            . # . . .
            # . # . .
            . . . # .
            `)
    }
    if (Würfelzahl == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    if (Würfelzahl == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
