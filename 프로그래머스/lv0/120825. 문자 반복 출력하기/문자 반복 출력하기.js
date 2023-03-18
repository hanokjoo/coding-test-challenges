function solution(my_string, n) {
    let answer = [];
    [...my_string].forEach((e) => {
       for (let i = 0; i < n; i++) answer.push(e);
    });
    return answer.join("");
    
    /* 참고할 만한 코드 - String.repeat() 사용
    let answer = [...my_string].map(v => v.repeat(n)).join("");
    return answer;
    */
}