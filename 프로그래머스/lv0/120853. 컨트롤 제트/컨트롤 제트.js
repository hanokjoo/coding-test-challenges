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
    
    /* 참고할 만한 코드 - stack처럼 풀이
    const stack = []

    s.split(' ').forEach((target) => {
        if(target === 'Z') stack.pop();
        else stack.push(+target)
    });

    return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
    */
}