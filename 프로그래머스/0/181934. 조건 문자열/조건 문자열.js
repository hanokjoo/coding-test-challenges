function solution(ineq, eq, n, m) {
    if (eq === "=") {
        if (ineq === ">") return +(n >= m);
        else return +(n <= m);
    } else {
        if (ineq === ">") return +(n > m);
        else return +(n < m);
    }
}