function solution(numbers) {
    let answer = 0;
    for (let i = 1; i < 10; i ++) {
        if (numbers.indexOf(i) === -1) answer += i;
    }
    return answer;
    
    /* 참고할 만한 코드 - "전체합 - 배열합"으로 풀이
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
    */
}