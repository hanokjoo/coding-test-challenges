function solution(picture, k) {
    let answer = [];
    for (let row of picture) {
        let newRow = "";
        for (let i = 0; i < row.length; i++) {
            for (let j = 0; j < k; j++) {
                newRow += row[i];
            }
        }
        for (let l = 0; l < k; l++) answer.push(newRow);
    }
    
    return answer;
}