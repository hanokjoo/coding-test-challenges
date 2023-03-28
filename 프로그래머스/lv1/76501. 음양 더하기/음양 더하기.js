function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((e, idx) => {
        answer += (signs[idx]) ? e : e * -1;
    });
    return answer;
}