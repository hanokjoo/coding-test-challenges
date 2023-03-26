function solution(x) {
    return (x % Array.from(x + "").reduce((acc, cur) => acc + Number(cur), 0) === 0);
}