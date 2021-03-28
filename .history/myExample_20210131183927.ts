enum Direction {
    Up = 3,
    Down,
    Left,
    Right
}
const four = Direction.Down
console.log(four)
enum Friends {
    V =  'VICTORIA',
    L = 'LILIA',
    T = 'TARAS',
    M = 'MYKOLA'
}
let taras = Friends.T
console.log(taras)
enum Some {
    first = 3,
    plus = first + 3,
    pow = Math.pow(plus, 3),
    something = first << 2
}
let twentyseven = Some.pow
let dontknow = Some.something
console.log(twentyseven)
console.log(dontknow)