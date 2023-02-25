function solution(quiz) {
    var answer = [];
    
    let temp = [];
    for (let e of quiz) {
        temp = e.split("=");
        if (new Function("return " + temp[0].trimEnd())() === parseInt(temp[1].trimStart())) {
            answer.push("O");
        } else {
            answer.push("X");
        }
    }

    return answer;
}