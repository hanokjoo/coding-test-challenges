function solution(s) {
    if (s.startsWith("-")) return s.slice(1) * -1;
    else if (s.startsWith("+")) return s.slice(1) * 1;
    else return s * 1;
    
    /* 참고할 만한 코드 - 암시적 형변환 활용
    return s * 1;
    
    return +s;
    */
}