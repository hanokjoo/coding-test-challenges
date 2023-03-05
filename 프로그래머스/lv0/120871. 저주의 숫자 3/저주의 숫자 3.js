function solution(n) {
    let temp = new Array(n).fill(1);
    let lastNum = 1;
    temp = temp.map((e, i) => {
        while ((lastNum % 3) === 0 || ((lastNum + "").match(/3/g) !== null)) {
            lastNum = lastNum + 1;
        };
        e = lastNum;
        lastNum = lastNum + 1;
        return e;
    });
    return temp.pop();
}