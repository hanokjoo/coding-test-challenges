function solution(n) {
    // 음수의 제곱도 양수이므로 x < 0 조건은 필요없음
    return (Number.isInteger(Math.sqrt(n))) ? 1 : 2;
}