var a;
var b;
var c;
var d = [1, 2, 3, 4];
var f = [1, "hello", true];
var j;
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 5] = "blue";
})(Color || (Color = {}));
var backgroundColor = Color.blue;
