function solution(a, b) {
    let answer = 0;
    a.forEach((e, idx) => {
        answer += e * b[idx];
    });
    return answer;
}