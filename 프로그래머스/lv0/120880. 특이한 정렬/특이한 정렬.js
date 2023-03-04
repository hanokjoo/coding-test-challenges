function solution(numlist, n) {
    return numlist.map((num) => [Math.abs(num - n), num])
    .sort((a, b) => (a[0] === b[0]) ? b[1] - a[1] : a[0] - b[0])
    .map((obj) => obj[1]);
    
    /* 참고할 만한 코드
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
    */
}