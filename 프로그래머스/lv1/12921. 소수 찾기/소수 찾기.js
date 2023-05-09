function solution(n) {
    let answer = 0;
    const numbers = new Array(n + 1).fill(0);
    
    for (let i = 2; i <= n; i++) {
        if (numbers[i] === 1) continue;
        for (let j = 2 * i; j <= n; j += i) {
            numbers[j] = 1;
        }
    }
    
    return numbers.filter(e => e === 0).length - 2;
}