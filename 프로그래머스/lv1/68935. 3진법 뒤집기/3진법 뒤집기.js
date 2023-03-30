function solution(n) {
    if (n === 1) return 1;
    
    let div = [];
    let i = 1;
    while (Math.pow(3, i) <= n) {
        div.push(Math.pow(3, i));
        i++;
    }
    div.unshift(1);
    
    let trit = new Array(div.length).fill(0);
    i = div.length - 1;
    while (n > 0) {
        if (n >= div[i]) {
            n -= div[i];
            trit[i] += 1;
        } else {
            i--;
        }
    }

    return parseInt(trit.join(""), 3);
}