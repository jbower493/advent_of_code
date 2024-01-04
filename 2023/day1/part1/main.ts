import * as fs from "fs";

const input = fs.readFileSync("./2023/day1/part1/input.txt", {
    encoding: "utf-8",
});
const lines = input.split("\r\n");

const sum = lines.reduce((acc, curr) => {
    const nums = curr.split("").filter((char) => !Number.isNaN(Number(char)));
    return Number(`${nums[0]}${nums[nums.length - 1]}`) + acc;
}, 0);

console.log(sum);
