function solution(a, b, n) {
    let answer = 0;
    
    while (n >= a && n !== 0) {
        answer += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + (n % a)
    }
    
    return answer;
}