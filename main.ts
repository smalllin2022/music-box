let 隨機取數 = 0
function music1 () {
    music.playMelody("C D E F G E G A ", 120)
    music.playMelody("A F E F D G E F ", 120)
    music.playMelody("- - - - - - - C ", 120)
}
function music3 () {
    music.playMelody("B A G A G F A C5 ", 120)
    music.playMelody("D A F G B C A D ", 120)
}
input.onGesture(Gesture.Shake, function () {
    if (隨機取數 == 1) {
        basic.showNumber(1)
        music1()
    } else if (隨機取數 == 2) {
        basic.showNumber(2)
        music2()
    } else if (隨機取數 == 3) {
        basic.showNumber(3)
        music3()
    }
})
function music2 () {
    music.playMelody("A F E F D G E F ", 120)
    music.playMelody("E D G F B A C5 B ", 113)
    music.playMelody("- - - - - C - C ", 113)
}
basic.forever(function () {
    隨機取數 = randint(1, 3)
})
