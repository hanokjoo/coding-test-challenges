function solution(a, b) {
    if (a === b) return a;
    if (a + b === 0) return 0;
    let arr = [a, b].sort((x, y) => Number(x) - Number(y));
    let answer = 0;   
    for (let i = arr[0]; i <= arr[1]; i++) {
        answer += i;
    }
    return answer;
}