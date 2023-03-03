function solution(chicken) {
    if (chicken < 10) return 0;
    return parseInt(chicken / 10) + solution(parseInt(chicken / 10) + parseInt(chicken % 10));
    
    /* 참고할 만한 코드
    var answer = parseInt((chicken-1) / 9);
    return answer;
    
    return ~~(chicken*0.111111) 
    -> (1000 * 0.1) + (100 * 0.1) + (10 * 0.1) -> (1000 * 0.1) + (1000 * 0.01) + (1000 * 0.001)
    */
}