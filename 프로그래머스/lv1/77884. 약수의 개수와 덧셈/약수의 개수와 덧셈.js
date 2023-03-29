function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++) {
        if (getDivCount(i) % 2 === 0) answer += i;
        else answer -= i;
    }
    
    return answer;
}

function getDivCount(n) {
    const divisors = [];
    
    for (let i = 1; i <= Math.sqrt(n); i ++) {
        if (n % i === 0) {
            divisors.push(i); 
            if (n / i != i) divisors.push(n / i);
        }
    }
    
    return divisors.length;
}