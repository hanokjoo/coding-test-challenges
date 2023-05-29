function solution(brown, yellow) {    
    for (let i = 3; i <= yellow + 2; i++) {
        if ((brown / 2 - i) * (i - 2) === yellow) {
            return [brown / 2 + 2 - i, i];
        }
    }
    return [0, 0];
    
    /*
    array[i][j] 라 할 때,
    i * 2 + (j - 2) * 2
    -> (i + j - 2) * 2 = 브라운갯수
    -> i + j - 2 = brown / 2
    -> i + j = bround / 2 + 2
    */
    
    /* 참고할 만한 코드 
    let xpy = brown / 2 + 2;
    for (let a = 1; a < xpy; a++) {
        if (a * (xpy - a) === brown + yellow) {
            return [Math.max(a, xpy - a), Math.min(a, xpy - a)];
    */
}