const [a, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

const numbers = input[0].split(" ").map(Number);
let prime = 0;
for (let num of numbers) {
    if (num === 1) continue;
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) prime++;
}
console.log(prime);