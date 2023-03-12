function solution(my_string) {
    return my_string.replace(/[a-z]/g, "")
        .split("")
        .map((e) => parseInt(e))
        .sort((a, b) => a - b);
    
    /* 참고할 만한 코드 - 정규식으로 숫자만 가져와서 정렬하기
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
    */
}