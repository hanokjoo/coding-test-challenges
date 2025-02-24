let input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let arrCount = [];

if (input % 5 === 0 && input % 3 === 0) {
    console.log(input / 5);
    return;
}

let dividedFive = parseInt(input / 5);

for (let i = dividedFive; i >= 0; i--) {   
    const remainedWithoutFives = input - 5 * i;
    if (remainedWithoutFives % 3 === 0) {
        arrCount.push(i + remainedWithoutFives / 3);
    }
}

if (arrCount.length > 0) {
    console.log(Math.min(...arrCount));
} else console.log(-1);
