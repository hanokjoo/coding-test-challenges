let input = require("fs").readFileSync("dev/stdin").toString().trim();

let currentNum = input[0];
let countNum = [0, 0];
countNum[currentNum]++;

for (let cur of input) {
    if (cur !== currentNum) {
        currentNum = cur;
        countNum[cur]++;
    }
}

if (countNum[0] === 0 || countNum[1] === 0) console.log(0);
else console.log(Math.min(...countNum));