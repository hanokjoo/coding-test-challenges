const input = require("fs")
    .readFileSync(0, 'utf-8')
    .trim()
    .split("\n");

const x = Number(input[0].trim());
const y = Number(input[1].trim());

if (x > 0) {
    if (y > 0) console.log(1);
    else console.log(4);
} else {
    if (y > 0) console.log(2);
    else console.log(3);
}