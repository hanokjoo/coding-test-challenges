function solution(x, n) {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        answer.push(x + (x * i));
    }
    
    return answer;
    
    /* 참고할 만한 코드 - array, map() 활용
    return Array(n).fill(x).map((v, i) => (i + 1) * v);
    */
}