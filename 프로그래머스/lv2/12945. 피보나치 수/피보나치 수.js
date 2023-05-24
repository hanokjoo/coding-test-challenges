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
}