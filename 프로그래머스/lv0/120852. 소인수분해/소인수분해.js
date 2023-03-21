function solution(n) {
    if (isPrime(n)) return [n];
    
    let answer = [];
    let primeNumbers = [2, 3];
    for (let i = 4; i <= Math.ceil(n / 2); i++) {
        if (isPrime(i)) primeNumbers.push(i);
    }
    
    let idx = 0;
    while(n !== 1) {
        if (n % primeNumbers[idx] === 0) {
            n = n / primeNumbers[idx];
            answer.push(primeNumbers[idx]);
        }
        if (idx === primeNumbers.length - 1) idx = 0;
        else idx++;
    }
    
    return [...new Set(answer)];
}

function isPrime(n) {
    for (let i = 2; i <= Math.ceil(n / 2); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

/* 참고할 만한 코드
function solution(n) {
    let i = 2;
    while (i <= n) {
        if (n % i === 0) {
            answer.push(i)     
            n = n / i
        } else {
            i++        
        }
    }

    return [...new Set(answer.sort((a, b) => a > b ? 1 : -1))]
}
*/