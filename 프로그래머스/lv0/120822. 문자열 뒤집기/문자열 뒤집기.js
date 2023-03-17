function solution(my_string) {
    let temp = [];
    [...my_string].forEach((e) => temp.unshift(e));
    return temp.join("");
    
    /* 참고할 만한 코드 - reverse() 사용
    return [...my_string].reverse().join("");
    */
}