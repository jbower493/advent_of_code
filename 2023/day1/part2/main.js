"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync("./2023/day1/part2/input.txt", {
    encoding: "utf-8",
});
var lines = input.split("\r\n");
var numMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};
var sum = lines.reduce(function (acc, curr) {
    var stringNum;
    var numNum;
    var _loop_1 = function (i) {
        stringNum = Object.keys(numMap).find(function (key) {
            return curr.startsWith(key, i);
        });
        if (stringNum)
            return "break";
        numNum = Object.values(numMap).find(function (val) {
            return curr.startsWith(val.toString(), i);
        });
        if (numNum)
            return "break";
    };
    for (var i = 0; i < curr.length; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    var secondStringNum;
    var secondNumNum;
    var _loop_2 = function (i) {
        secondStringNum = Object.keys(numMap).find(function (key) {
            return curr
                .split("")
                .reverse()
                .join("")
                .startsWith(key.split("").reverse().join(""), i);
        });
        if (secondStringNum)
            return "break";
        secondNumNum = Object.values(numMap).find(function (val) {
            return curr.split("").reverse().join("").startsWith(val.toString(), i);
        });
        if (secondNumNum)
            return "break";
    };
    for (var i = 0; i < curr.length; i++) {
        var state_2 = _loop_2(i);
        if (state_2 === "break")
            break;
    }
    var firstNum = stringNum ? numMap[stringNum] : numNum;
    var secondNum = secondStringNum ? numMap[secondStringNum] : secondNumNum;
    return Number("".concat(firstNum).concat(secondNum)) + acc;
}, 0);
console.log(sum);
