function solution(n)
{
    let times = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = n - 1;
            times++;
        }
    }
    return ++times;
    
    /* 참고할 만한 코드 - 이진수로 풀이
    1.
    if (n === 1) return 1;
    const nArr = Array.from(n.toString(2));
    return nArr.reduce((a, b) => (+a) + (+b));
    */   
}