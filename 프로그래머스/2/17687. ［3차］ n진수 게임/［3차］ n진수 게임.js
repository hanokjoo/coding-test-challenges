function solution(n, t, m, p) {
    const maxLength = t * m + p;
    let numbers = "";
    
    let currentNum = 0;
    while (numbers.length <= maxLength) {
        numbers += currentNum.toString(n).toUpperCase();
        currentNum++;
    }
    
    let answer = "";
    let round = 0;
    while(answer.length < t) {
        answer += numbers[round * m + (p - 1)];
        round++;
    }
    
    return answer;
}
// start(17:00) ~ end(17:15)