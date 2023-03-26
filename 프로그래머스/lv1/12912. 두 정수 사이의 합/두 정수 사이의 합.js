function solution(a, b) {
    if (a === b) return a;
    if (a + b === 0) return 0;
    // sort() 시 마이너스 유의: x - y로 하면 [-1, -100]로 정렬된다.
    let arr = [a, b].sort((x, y) => Number(x) - Number(y));
    let answer = 0;   
    for (let i = arr[0]; i <= arr[1]; i++) {
        answer += i;
    }
    return answer;
    
    /* 참고할 만한 코드 - 가우스 공식 적용
    return (a + b) * (Math.abs(b - a) + 1) / 2; 
    */
}