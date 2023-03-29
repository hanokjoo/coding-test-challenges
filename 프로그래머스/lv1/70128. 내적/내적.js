function solution(a, b) {
    let answer = 0;
    a.forEach((e, idx) => {
        answer += e * b[idx];
    });
    return answer;
    
    /* 참고할 만한 코드 - reduce() 사용
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
    
    (사용 안하는 arg에 _를 쓴다.)
    */
}