function solution(strArr) {
    let answer = new Array(31).fill(0);
    const filtered = strArr.reduce((a, c) => {
        answer[c.length]++;
        return a;
    }, answer);
    return Math.max(...filtered);
}