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

/* 참고할 만한 코드 - 제곱근이 정수면 약수의 갯수는 홀수이다.
function solution (left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
*/