function solution(n,a,b)
{
    if (n === 2) return 1;
    const times = n.toString(2).length - 1;
    const half = n / 2;
    //console.log(n, a, b, times, half);
    if ((a <= half && b > half) || (a > half && b <= half)) {
        return times;
    } else if (a <= half && b <= half) {
        return solution(half, a, b);
    } else {
        return solution(half, a - half, b - half);
    }
    return 0;
}