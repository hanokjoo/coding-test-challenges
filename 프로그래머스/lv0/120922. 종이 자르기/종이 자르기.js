function solution(M, N) {
    // 가로 가위질 m - 1번
    // 세로 가위질 (n - 1) * m번
    // = M - 1 + (N * M) - M
    // = M * N - 1
    // retrn (M - 1) + ((N - 1) * M);
    return M * N -1;
}