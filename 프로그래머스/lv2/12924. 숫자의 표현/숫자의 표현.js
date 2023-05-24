function solution(n) {
    if (n < 3) return 1;
    
    let answer = 1;
    let way = [], sum = 0, start = 0;;
    if (n % 2 !== 0) {
        answer++;   // [(n / 2), (n / 2 + 1)]
    } else {
        start = Math.floor(n / 2) - 1;
    }
    
    for (let i = Math.floor(n / 2); i > 0; i--) {
        way.push(i);
        sum = way.reduce((a, c) => a + c, 0);
        if (sum === n) answer++;
        else if (sum > n) way.shift();
    }
    
    return answer;
}