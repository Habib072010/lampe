let texte_reconnu = ""
input.onButtonPressed(Button.A, function () {
    let Textereconnu = ""
    texte_reconnu = "Allumer"
    if (Textereconnu.includes("Allumer")) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
        basic.showString("Lampe allumée")
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("Lampe éteinte")
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(0, 0)
})
basic.forever(function () {
	
})
