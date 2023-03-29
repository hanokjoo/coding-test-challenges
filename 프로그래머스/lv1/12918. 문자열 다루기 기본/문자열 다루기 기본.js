function solution(s) {
    return ((s.length === 4 || s.length === 6)
            && (s.replace(/[0-9]/g, "").length === 0));
    
    /* 참고할 만한 코드 - 정규식 더 적극 활용하기
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
    */
}