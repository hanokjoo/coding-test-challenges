function solution(n) {
    let answer = 0;
    let before2 = 1;
    let before1 = 2;
    
    if (n <= 2) return n;
   
    for (let i = 3; i <= n; i++) {
        answer = (before1 + before2) % 1234567;
        before2 = before1 % 1234567;
        before1 = answer;
    }
    
    return answer;
}