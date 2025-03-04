let inputNum = Number(require("fs").readFileSync("dev/stdin").toString().trim());

if (inputNum % 5 === 0) {
    console.log(inputNum / 5);
    return;
}

const share = Math.floor(inputNum / 5);

for (let i = share; i >= 0; i--) {
    let remain = inputNum - 5 * i;
    if (remain % 2 === 0) {
        console.log(i + Math.floor(remain / 2));
        return;
    }
}
console.log(-1);