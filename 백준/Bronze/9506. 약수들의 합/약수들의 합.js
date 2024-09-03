const input = require("fs")
    .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

input.pop();
for (let num of input) {
    let arr = [1];
    for (let i = 2; i < num; i++) {
        if (num % i === 0) arr.push(i);
    }
    let sumArr = arr.reduce((a, c) => {
        a += c;
        return a;
    }, 0);
    
    if (sumArr === num) {
        let str = num + " = ";
        for (let j = 0; j < arr.length; j++) {
            str += arr[j];
            if (j < arr.length - 1) str += " + ";
        }
        console.log(str);
    } else {
        console.log(num + " is NOT perfect.");
    }
}
