const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .toLowerCase();

let count = new Array(26).fill(0);
input.split("").forEach((e) => {
    count[e.charCodeAt() - 97]++;
});
const max = Math.max(...count);
if (count.filter((e) => e === max).length > 1) console.log("?");
else {
    console.log(String.fromCharCode(count.findIndex((e) => e === max) + 65));
}