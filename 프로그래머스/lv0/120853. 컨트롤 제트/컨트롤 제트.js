function solution(s) {
    let answer = 0;
    let preVal = 0;
    s.split(" ").map((cur, idx) => {
        if (cur === "Z") {
            answer -= preVal;
        }
        else {
            answer += parseInt(cur);
            preVal = parseInt(cur);
        }
    });
    return answer;
}