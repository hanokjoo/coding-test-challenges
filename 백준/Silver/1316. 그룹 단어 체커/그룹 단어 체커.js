const [a, ...input] = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n");

let answer = 0;
for (let i = 0; i < a; i++) {
    let stack = [];
    const word = input[i];
    let check = true;

    for (let j = 0; j < word.length; j++) {
        if (j === 0) stack.push(word[j]);
        else if (j > 0 && word[j - 1] !== word[j]) {
            if (stack.indexOf(word[j]) < 0) stack.push(word[j]);
            else {
                check = false;
                break;
            }
        }
    }
    if (check) answer++;
}
console.log(answer);
