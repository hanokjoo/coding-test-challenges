function solution(n) {
    if (n < 2) return n;
    
    let divisor = [];
    
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) divisor.push(i); 
    }
    
    divisor.forEach((e, idx, thisArr) => thisArr.push(n / e));
    
    return [...new Set(divisor)].reduce((acc, cur) => acc + cur, 0);
}