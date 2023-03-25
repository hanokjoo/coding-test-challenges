function solution(n) {
    return Array.from(n.toString()).map((e) => Number(e)).reverse();
    
    /* 참고할 만한 코드 - 자연수로 풀이
    let arr = [];

    do {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);

    return arr;
    */
}