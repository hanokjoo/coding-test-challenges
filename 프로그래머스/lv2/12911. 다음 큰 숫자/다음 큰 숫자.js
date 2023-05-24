function solution(n) {
    if (n === 0) return 0;
    let countOne = [...n.toString(2)].filter(e => e === "1").length;
    let newCountOne = 0, answer = n;
    while (countOne !== newCountOne) {
        answer++;
        newCountOne = [...answer.toString(2)].filter(e => e === "1").length;
        //console.log(countOne, answer, answer.toString(2), newCountOne);
    }
    return answer;
}