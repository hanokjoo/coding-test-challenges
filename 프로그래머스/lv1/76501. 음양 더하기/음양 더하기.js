function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((e, idx) => {
        answer += (signs[idx]) ? e : e * -1;
    });
    return answer;
    
    /* 참고할 만한 코드 - reduce() 사용
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
    */
}