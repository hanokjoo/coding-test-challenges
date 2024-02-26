function solution(n, k) {
    let answer = 0;
    
    n.toString(k).toString().split("0").map((e) => {
        if (e > 1 && isPrime(e)) answer++;
    });
    
    return answer;
}

function isPrime(n) {
    if (n === 2 || n === 3) return true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    
    return true;
}
// start(15:55) ~ end(16:14)