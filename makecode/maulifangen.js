let Zufallszahl = 0
let Punktzahl = 0
input.onButtonPressed(Button.A, () => {
    if (Zufallszahl == 0) {
        music.playTone(330, music.beat(BeatFraction.Quarter))
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        Punktzahl += 1
        basic.pause(400)
    } else {
        music.playTone(131, music.beat(BeatFraction.Quarter))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        Punktzahl += -1
        basic.pause(400)
    }
})
input.onButtonPressed(Button.B, () => {
    if (Zufallszahl == 1) {
        music.playTone(330, music.beat(BeatFraction.Quarter))
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        Punktzahl += 1
        basic.pause(400)
    } else {
        music.playTone(131, music.beat(BeatFraction.Quarter))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        Punktzahl += -1
        basic.pause(400)
    }
})
input.onButtonPressed(Button.AB, () => {
    basic.showNumber(Punktzahl)
    basic.pause(1000)
})
basic.forever(() => {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(300)
    Zufallszahl = Math.random(2)
    if (Zufallszahl == 0) {
        basic.showLeds(`
            . # . . .
            # # . . .
            # # . . .
            . # . . .
            . # . . .
            `)
        basic.pause(300)
    }
    if (Zufallszahl == 1) {
        basic.showLeds(`
            . . . # .
            . . . # #
            . . . # #
            . . . # .
            . . . # .
            `)
        basic.pause(300)
    }
})
