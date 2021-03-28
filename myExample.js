var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 3] = "Up";
    Direction[Direction["Down"] = 4] = "Down";
    Direction[Direction["Left"] = 5] = "Left";
    Direction[Direction["Right"] = 6] = "Right";
})(Direction || (Direction = {}));
var four = Direction.Down;
console.log(four);
var Friends;
(function (Friends) {
    Friends["V"] = "VICTORIA";
    Friends["L"] = "LILIA";
    Friends["T"] = "TARAS";
    Friends["M"] = "MYKOLA";
})(Friends || (Friends = {}));
var taras = Friends.T;
console.log(taras);
var Some;
(function (Some) {
    Some[Some["first"] = 3] = "first";
    Some[Some["plus"] = 6] = "plus";
    Some[Some["pow"] = Math.pow(Some.plus, 3)] = "pow";
    Some[Some["something"] = 12] = "something";
})(Some || (Some = {}));
var twentyseven = Some.pow;
var dontknow = Some.something;
console.log(twentyseven);
console.log(dontknow);
