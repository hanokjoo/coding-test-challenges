function solution(n) {
    if (n === 1) return n;
    
    let factVal = 1;
    for (let i = 2; i <= n; i ++) {
        factVal *= i;
        if (factVal === n) return i;
        else if (factVal > n) return i - 1;
    }
}