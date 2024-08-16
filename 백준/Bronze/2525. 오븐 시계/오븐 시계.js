const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

const startTime = input[0].trim().split(" ");
let [hour, minute] = [Number(startTime[0]), Number(startTime[1])];
const cookingTime = Number(input[1]);

minute = minute + cookingTime;
hour = hour + Math.floor(minute / 60);
minute = minute % 60;
if (hour === 24) hour = 0;
else if (hour > 24) hour = Math.floor(hour % 24);
console.log(hour % 24 === 0 ? 0 : hour, minute);