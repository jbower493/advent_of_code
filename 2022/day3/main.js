"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("./2022/day3/input.txt", { encoding: "utf-8" });
var backpacks = input.split("\r\n");
function getItemTypePriority(itemType) {
    var isUpperCase = itemType.toUpperCase() === itemType;
    return itemType.charCodeAt(0) - (isUpperCase ? 38 : 96);
}
// Find the sum of the priorities of the item types that appear twice in each rucksack
var prioAcca = 0;
backpacks.forEach(function (backpack) {
    var firstHalf = backpack.slice(0, backpack.length / 2);
    var secondHalf = backpack.slice(backpack.length / 2);
    var duplicateItemType = firstHalf
        .split("")
        .find(function (itemType) {
        return secondHalf
            .split("")
            .some(function (secondItemType) { return itemType === secondItemType; });
    });
    if (!duplicateItemType)
        return;
    var prio = getItemTypePriority(duplicateItemType);
    prioAcca += prio;
});
// Part 2
var partTwoPrioAcca = 0;
var _loop_1 = function (i) {
    var group = backpacks.slice(i - 2, i + 1).map(function (str) { return str.split(""); });
    var badge = group[0].find(function (itemType) { return group[1].includes(itemType) && group[2].includes(itemType); });
    var prio = getItemTypePriority(badge || "");
    partTwoPrioAcca += prio;
};
for (var i = 2; i < backpacks.length; i += 3) {
    _loop_1(i);
}
console.log(partTwoPrioAcca);
