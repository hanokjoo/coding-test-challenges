function solution(strings, n) {
    return strings.sort().sort((a, b) => {
        return (a[n] >= b[n]) ? 1 : -1;
    });
}