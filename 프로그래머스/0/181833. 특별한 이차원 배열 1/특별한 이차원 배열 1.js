function solution(n) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        let makeRow = [];
        for (let j = 0; j < n; j++) {
            if (j === i) makeRow.push(1);
            else makeRow.push(0);
        }
        answer.push(makeRow);
    }
    
    return answer;
}