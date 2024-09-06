const [a, b] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let arr = new Array(b).fill(0).map((e, i) => {
    e = i + 1;
    return e;
});
arr[0] = 0;

for (let ar of arr) {
    if (ar > 0) removeNotPrime(arr, ar);
}
arr = arr.slice(a - 1);

if (arr.every((e) => e === 0)) console.log(-1);
else console.log(arr.reduce((acc, cur) => acc + cur, 0), findMin(arr));

function removeNotPrime(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            if (arr[i] % num === 0 && arr[i] / num > 1) arr[i] = 0;
        }
    }
}

function findMin(arr) {
    for (let ar of arr) {
        if (ar !== 0) return ar;
    }
}
