function solution(start, end_num) {
    let answer = [];
    let repeatTime = start - end_num;
    for (let i = 0; i <= repeatTime; i++) {
        answer.push(start);
        start--;
    }
    
    return answer;
}