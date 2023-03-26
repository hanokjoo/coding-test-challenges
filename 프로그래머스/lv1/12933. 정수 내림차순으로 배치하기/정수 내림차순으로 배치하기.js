function solution(n) {
    return Number(Array.from(n.toString()).sort((a, b) => b - a).join(""));
}