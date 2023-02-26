function solution(array) {
    let answer = [];
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}