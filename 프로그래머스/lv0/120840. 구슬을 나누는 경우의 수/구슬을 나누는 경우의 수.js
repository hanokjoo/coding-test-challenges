// function solution(balls, share) {
//     if (balls === share) return 1;
//     if (share === 1) return balls;
    
//     let answer = 1;
//     for (let i = 0; i < balls - share; i++) {
//         console.log((balls - i) / (balls - share - i));
//         answer *= ((balls - i) / (balls - share - i));
//     }
//     console.log(answer);
//     return answer;
// }

function solution(a, b) {
    if (a === 1) return b;
    if (b - a === 0) return 1;
    
    return Math.round(factorial(a) / (factorial(a - b) * factorial(b)));
}

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}