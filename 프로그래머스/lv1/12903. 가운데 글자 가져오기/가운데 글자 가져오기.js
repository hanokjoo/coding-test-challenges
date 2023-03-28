function solution(s) {
    if (s.length % 2 === 0) return s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);
    else return s.charAt(Math.floor(s.length / 2));
    
    /* 참고할 만한 코드 - 문자열도 배열처럼 접근 가능
    const mid = Math.floor(s.length / 2);
    return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
    */
}