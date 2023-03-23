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