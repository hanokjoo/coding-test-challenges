const [a, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

const unit = [25, 10, 5];
for (let change of input) {
    let arr = unit.reduce((a, c) => {
        a.push(Math.floor(change / c));
        change = Math.floor(change % c);
        return a;
    }, []);
    arr.push(change);
    console.log(arr.join(" "));
}
