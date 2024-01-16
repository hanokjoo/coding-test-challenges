function solution(a, b) {
    let value1 = parseInt("" + a + b);
    let value2 = 2 * a * b;
    return (value1 > value2) ? value1 : value2;
}