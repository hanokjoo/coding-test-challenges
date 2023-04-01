function solution(s) {
    let count = 1;
    let answer = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            answer += " ";
            count = 1;
        } else {
            answer += (count % 2 === 0) ? s[i].toLowerCase() : s[i].toUpperCase();
            count++;
        }
    }
        
    return answer;
                            
}