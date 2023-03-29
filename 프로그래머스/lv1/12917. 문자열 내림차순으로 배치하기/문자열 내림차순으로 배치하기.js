function solution(s) {
    if (s.length === 1) return s;
    
    return [...s].map((ch) => ch.charCodeAt(0))
        .sort((a, b) => b - a)
        .map((ch) => String.fromCodePoint(ch))
        .join("");
    
    /* 참고할 만한 코드
    return s.split("").sort().reverse().join("");
    
    문자열을 그냥 정렬하면 Z가 제일 앞으로 오니까 reverse() 해준다.
    */
}