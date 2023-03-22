function solution(sides) {
    let answer = 0;
    sides = sides.sort((a, b) => a - b);
    
    let i = sides[1] - sides[0] + 1;
    while(i <= sides[1]) {
        answer++;
        i++;
    }
    
    i = sides[1] + 1;
    while(i < sides[0] + sides[1]) {
        answer++;
        i++;
    }
    return answer;
    
    /* 참고할 만한 코드
    - sides = [a,b] (sorted), 새로 주어지는 변의 길이 c 일 때
      1) a가 가장 긴 경우(a > c): b + c > a > c => a > c > a-b => c의 갯수는 b-1개
      2) c가 가장 긴 경우: 1)과 동일, a=c 경우 한 가지 이므로 2b-1개
    return Math.min(...sides)*2-1
    
    - 새 변을 배열에 넣어서 삼각형 조건 되는지 카운트
    let a = Math.min(...sides);
    let b = Math.max(...sides);
    let answer = 0;
    for(let i = 1; i < a + b; i++) {
        let arr = [a,b,i].sort((a, b) => a - b);
        let [q, w, e] = arr;
        if(q + w > e) {
            answer++;
        }
    }
    return answer;
    */
}