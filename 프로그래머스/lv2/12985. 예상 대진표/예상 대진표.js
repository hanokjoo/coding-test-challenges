function solution(n,a,b)
{
    if (n === 2) return 1;
    const times = n.toString(2).length - 1;
    const half = n / 2;
    
    if ((a <= half && b > half) || (a > half && b <= half)) {
        return times;
    } else if (a <= half && b <= half) {
        return solution(half, a, b);
    } else {
        return solution(half, a - half, b - half);
    }
    return 0;
    
    /* 참고할 만한 코드 - Math.ceil() 활용
    let answer = 0;
    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }
    return answer;
    */
}