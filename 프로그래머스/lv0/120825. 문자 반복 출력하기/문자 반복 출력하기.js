function solution(my_string, n) {
    let answer = [];
    [...my_string].forEach((e) => {
       for (let i = 0; i < n; i++) answer.push(e);
    });
    return answer.join("");
}