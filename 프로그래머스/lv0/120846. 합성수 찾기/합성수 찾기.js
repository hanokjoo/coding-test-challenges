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

/* 참고할 만한 코드 - 약수의 갯수로 체크
return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((i) => {
      let cnt = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) cnt++;
      }
      return cnt >= 3;
    }).length;
*/