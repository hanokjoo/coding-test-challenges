function solution(n) {
    let answer = 0;
    for (let i = 0; i <= n; i ++) {
        if (i % 2 === 0) answer += i;
    }
    return answer;
    
    /* 참고할 만한 코드
    - 수열 공식 활용
    var half = Math.floor(n/2);
    return half*(half+1);
    
    - 반복 횟수 줄임
    var answer = 0;
    for(let i=2 ; i<=n ; i+=2)
        answer += i;
    return answer;
    */
}