function solution(M, N) {
    // 가로 가위질 m - 1번
    // 세로 가위질 (n - 1) * m번
    return (M - 1) + ((N - 1) * M);
}