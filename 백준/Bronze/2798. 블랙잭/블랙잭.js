const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

const [n, m] = input[0].trim().split(" ").map(Number);
const list = input[1].split(" ").map(Number);

let answer = 0;
for (let i = 0; i < list.length - 2; i++) {
    for (let j = i + 1; j < list.length - 1; j++) {
        for (let k = j + 1; k < list.length; k++) {
            const sum = list[i] + list[j] + list[k];
            if (sum <= m && Math.abs(m - sum) < Math.abs(m - answer)) {
                answer = sum;
            }
        }
    }
}
console.log(answer);
