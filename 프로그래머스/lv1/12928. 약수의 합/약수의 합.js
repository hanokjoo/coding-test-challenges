function solution(n) {
    if (n < 2) return n;
    
    let divisor = [];
    
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) divisor.push(i); 
    }
    
    divisor.forEach((e, idx, thisArr) => thisArr.push(n / e));
    
    return [...new Set(divisor)].reduce((acc, cur) => acc + cur, 0);
    
    /* 참고할 만한 코드
    - 1씩 증가하면 다 나눠보기
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum;
    
    - 짝을 바로 더하기
    var answer = 0;
    let i;
    for (i = 1; i <= Math.sqrt(n); i++){
        if (!(n % i)) {
            answer += (i + n / i);
        }
    }
    i--;
    return (i === n / i) ? answer-i : answer;
    */
    
}