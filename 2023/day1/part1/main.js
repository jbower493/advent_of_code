"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync("./2023/day1/part1/input.txt", {
    encoding: "utf-8",
});
var lines = input.split("\r\n");
var sum = lines.reduce(function (acc, curr) {
    var nums = curr.split("").filter(function (char) { return !Number.isNaN(Number(char)); });
    return Number("".concat(nums[0]).concat(nums[nums.length - 1])) + acc;
}, 0);
console.log(sum);
