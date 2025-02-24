const [count, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let answer = 0;
let [unitNumber, total] = count.split(" ");
const moneyUnits = input.map((e) => Number(e.replace("\n", "")));

for (let i = moneyUnits.length - 1; i >= 0; i--) {
    if (total >= moneyUnits[i]) {
        const share = Math.floor(total / moneyUnits[i]);
        total -= moneyUnits[i] * share;
        answer += share;
    }
}
console.log(answer);