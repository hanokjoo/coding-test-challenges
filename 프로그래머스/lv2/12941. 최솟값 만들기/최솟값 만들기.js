function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    let answer = 0;
    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }
    
    return answer;
    
    /* 참고할 만한 코드 - answer 대신 reduce() 사용할 수 있다.
    return A.reduce((total, val, idx) => total + val * B[idx], 0);
    */
}