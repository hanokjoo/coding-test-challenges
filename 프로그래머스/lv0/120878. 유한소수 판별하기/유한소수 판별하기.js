function solution(a, b) {
    if (b === 1) return 1;
    
    let gcd = getGCD(a, b);
    b = b / gcd;
    console.log(b, gcd);
    
    let div = 2;
    let prime = [];
    while(div <= b) {
        if (b % div === 0) {
            b = b / div;
            prime.push(div);
        } else div++;
    }
    return (prime.filter((e) => e !== 2 && e !== 5).length > 0) ? 2 : 1;
}

function getGCD(a, b) {
    return (a % b === 0) ? b : getGCD(b, a % b);
}

/* 참고할 만한 코드
    let n = 1;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) n = i;
    }

    b /= n;
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;

    return b === 1 ? 1 : 2;   
*/