function solution(numbers) {
    return numbers.sort((a, b) => a - b).slice(-2).reduce((acc, cur) => acc * cur, 1);
    
    /* 참고할 만한 코드
    - 오름차순으로 정리
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1];
    
    - 필요한 두 값만 가져오기
    let [a, b] = numbers.sort((a,b) => b - a);
    return a * b;
    */
}