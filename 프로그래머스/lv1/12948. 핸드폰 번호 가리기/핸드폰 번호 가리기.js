function solution(phone_number) {
    return [...phone_number]
        .map((e, idx, arr) => (idx < arr.length - 4) ? e = "*" : e)
        .join("");
    
    /* 
    참고할 만한 코드 - 정규식 활용
    return s.replace(/\d(?=\d{4})/g, "*");
    */
}