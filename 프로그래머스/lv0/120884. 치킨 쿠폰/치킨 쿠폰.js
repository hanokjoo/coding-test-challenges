function solution(chicken) {
    if (chicken < 10) return 0;
    return parseInt(chicken / 10) + solution(parseInt(chicken / 10) + parseInt(chicken % 10));
}