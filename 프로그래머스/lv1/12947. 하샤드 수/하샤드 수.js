function solution(x) {
    return (x % Array.from(x + "").reduce((acc, cur) => acc + Number(cur), 0) === 0);
    
    /* 참고할 만한 코드 - 숫자로 접근해서 풀이, 속도는 더 빠르다고 함
    let num = x;
    let sum = 0;
    do {
        sum += x % 10;
        x = Math.floor(x / 10);
    } while (x > 0);

    return !(num % sum);
    */
}