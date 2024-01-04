import * as fs from "fs";

const input = fs.readFileSync("./2023/day1/part2/input.txt", {
    encoding: "utf-8",
});
const lines = input.split("\r\n");

const numMap = {
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

const sum = lines.reduce((acc, curr) => {
    let stringNum: keyof typeof numMap | undefined;
    let numNum: number | undefined;
    for (let i = 0; i < curr.length; i++) {
        stringNum = Object.keys(numMap).find((key) =>
            curr.startsWith(key, i)
        ) as keyof typeof numMap;
        if (stringNum) break;

        numNum = Object.values(numMap).find((val) =>
            curr.startsWith(val.toString(), i)
        );
        if (numNum) break;
    }

    let secondStringNum: keyof typeof numMap | undefined;
    let secondNumNum: number | undefined;
    for (let i = 0; i < curr.length; i++) {
        secondStringNum = Object.keys(numMap).find((key) =>
            curr
                .split("")
                .reverse()
                .join("")
                .startsWith(key.split("").reverse().join(""), i)
        ) as keyof typeof numMap;
        if (secondStringNum) break;
        secondNumNum = Object.values(numMap).find((val) =>
            curr.split("").reverse().join("").startsWith(val.toString(), i)
        );
        if (secondNumNum) break;
    }

    const firstNum = stringNum ? numMap[stringNum] : numNum;
    const secondNum = secondStringNum ? numMap[secondStringNum] : secondNumNum;

    return Number(`${firstNum}${secondNum}`) + acc;
}, 0);

console.log(sum);
