function solution(n) {
    let result = Math.sqrt(n);
    return (result > 0 && Number.isInteger(result)) ? 1 : 2;
}