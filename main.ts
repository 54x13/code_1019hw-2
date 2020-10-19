basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X, 4)
            basic.pause(200)
        }
        for (let X = 0; X <= 4; X++) {
            led.plot(X, 3)
            basic.pause(200)
        }
        for (let X = 0; X <= 4; X++) {
            led.plot(X, 2)
            basic.pause(200)
        }
        for (let X = 0; X <= 4; X++) {
            led.plot(X, 1)
            basic.pause(200)
        }
        for (let X = 0; X <= 4; X++) {
            led.plot(X, 0)
            basic.pause(200)
        }
    }
    basic.clearScreen()
})
