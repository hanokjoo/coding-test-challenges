function solution(s1, s2) {
    var answer = 0;
    
    for (let e1 of s1) {
        answer += s2.filter(e2 => e1 === e2).length;
    }
    
    return answer;
}