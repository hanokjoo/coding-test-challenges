function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 4;
    
    let answer = 0;
    if (n % 2 !== 0) {
        for (let i = 1; i <= n; i += 2) {
            answer += i;
        }
    } else {
        for (let i = 2; i <= n; i += 2) {
            answer += Math.pow(i, 2);
        }
    }
    
    return answer;
}