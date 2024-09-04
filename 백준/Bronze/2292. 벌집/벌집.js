const inputNum = Number(
    require("fs")
        .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
        .toString()
        .trim()
);

let nujuck = 0;
let add = 1;
let min = 1;
while (inputNum > 6 * nujuck + 1) {
    min++;
    nujuck += add;
    add++;
}
console.log(min);
