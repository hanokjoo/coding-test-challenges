function solution(X, Y) {
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);
    [...X].map(e => countX[+e]++);
    [...Y].map(e => countY[+e]++);
    
    const pair = [];
    for (let i = 0; i < countX.length; i++) {
        if (countX[i] <= countY[i]) {
            for (let j = 0; j < countX[i]; j++) pair.push(i);
        } else {
            for (let j = 0; j < countY[i]; j++) pair.push(i);
        }
    }
    
    if (pair.length === 0) return "-1";
    if (pair.every(e => e === 0)) return "0";
    return pair.sort((a, b) => b - a).join("");
    
    /*
    let small = (X.length <= Y.length) ? [...X] : [...Y];
    let big = (X.length > Y.length) ? [...X] : [...Y];
    small.sort((a, b) => b - a);
    big.sort((a, b) => b - a);
    
    const partner =[];
    let index = -1;
    for (let s of small) {
        index = big.findIndex(e => e === s);
        if (index >= 0) {
            partner.push(s);
            big = big.slice(index + 1);
        }
    }
    if (partner.length === 0) return "-1";
    if (partner.every(e => e === "0")) return "0";
    return partner.join("");
    */
}