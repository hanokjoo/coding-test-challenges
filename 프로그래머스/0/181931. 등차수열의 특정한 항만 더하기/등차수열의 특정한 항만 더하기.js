function solution(a, d, included) {
    let answer = 0;
    for (let i = 0; i < included.length; i++) {
        if (included[i]) {
            answer += (d * i) + a;
        }
    }
    
    return answer;
}