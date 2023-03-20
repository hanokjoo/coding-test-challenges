function solution(age) {
    return [...age.toString()].map((e) => {
        return String.fromCharCode(97 + Number(e));
    }).join("");
    
    /* 참고할 만한 코드 - 문자열 자체의 인덱스 활용
    return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
    */
}