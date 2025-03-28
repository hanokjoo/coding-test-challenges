let inputNum = Number(require("fs").readFileSync("dev/stdin").toString().trim());

let count = 0;
let arrNum = [];
if (inputNum < 10) {
    arrNum = ["0", inputNum.toString()];
} else {
    arrNum = [...inputNum.toString()];
}

do {
    let sum = [...(Number(arrNum[0]) + Number(arrNum[1])).toString()];
    arrNum = [arrNum.pop(), sum.pop()];
    count++;
} while (inputNum !== Number(arrNum[0] + arrNum[1]));
console.log(count);