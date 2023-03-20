function solution(n) {
    if (n < 4) return 0;
    
    let answer = [];
    for (let i = 4; i <= n; i++) {
        if(!isPrime(i)) answer.push(i);
    }
    return answer.length;
}

function isPrime(n) {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) return false;
    }
    return true;
}