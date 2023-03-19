function solution(hp) {
    let answer = 0, remain = hp;
    if (hp >= 5) {
        answer += Math.floor(hp / 5);
        remain = hp % 5;
    }
    if (remain >= 3) {
        answer += Math.floor(remain / 3);
        remain = remain % 3;
    }
    if (remain > 0) {
        answer += remain;
    }
    return answer;
    
    /* 참고할 만한 코드
    return Math.floor(hp / 5) + Math.floor((hp % 5) / 3)+(hp % 5) % 3;
    */
}