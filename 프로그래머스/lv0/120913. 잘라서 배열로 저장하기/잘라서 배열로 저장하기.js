function solution(my_str, n) {
    let answer = [];
    let loopNum = my_str.length / n;
    
    for (let i = 0; i < loopNum; i++) {
        answer.push(my_str.substr(i * n, n));
    }
    return answer;
}