import * as fs from "fs";

const input = fs.readFileSync("./2022/day3/input.txt", { encoding: "utf-8" });

const backpacks = input.split("\r\n");

function getItemTypePriority(itemType: string) {
    const isUpperCase = itemType.toUpperCase() === itemType;

    return itemType.charCodeAt(0) - (isUpperCase ? 38 : 96);
}

// Find the sum of the priorities of the item types that appear twice in each rucksack

let prioAcca = 0;

backpacks.forEach((backpack) => {
    const firstHalf = backpack.slice(0, backpack.length / 2);
    const secondHalf = backpack.slice(backpack.length / 2);

    const duplicateItemType = firstHalf
        .split("")
        .find((itemType) =>
            secondHalf
                .split("")
                .some((secondItemType) => itemType === secondItemType)
        );

    if (!duplicateItemType) return;

    const prio = getItemTypePriority(duplicateItemType);
    prioAcca += prio;
});

// Part 2

let partTwoPrioAcca = 0;

for (let i = 2; i < backpacks.length; i += 3) {
    const group = backpacks.slice(i - 2, i + 1).map((str) => str.split(""));

    const badge = group[0].find(
        (itemType) => group[1].includes(itemType) && group[2].includes(itemType)
    );

    const prio = getItemTypePriority(badge || "");

    partTwoPrioAcca += prio;
}

console.log(partTwoPrioAcca);
