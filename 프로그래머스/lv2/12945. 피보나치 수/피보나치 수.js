function solution(n) {
    if (n === 2) return 1;
    let a = 1, b = 1;
    let temp = 0;
    for (let i = 3; i <= n; i++) {
        temp = b;
        b = (a % 1234567 + b % 1234567) % 1234567;
        a = temp;   
        //console.log(a, b);
    }
    return b;
    
    /* 참고할 만한 코드 - 나머지들을 배열에 넣어서 풀이
    let result = [0 , 1];
    while ( result.length !== n + 1) {
        var fibonacci = (result[result.length - 2] + result[result.length - 1]) % 1234567;
        result.push(fibonacci);
    }
    return result[n];
    */
}