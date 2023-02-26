function solution(n) {
    let answer = [];
    let half = n / 2;
    
    for (let i = 1; i <= half; i++) {
        if (n % i === 0) {
            answer.push(i);
        }
    }
    
    answer.push(n);
    return answer;
}