function solution(s){
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "(") answer++;
        else {
            if (answer === 0) {
                answer = 1;
                break;
            } else answer--;
        }
    }
    
    return (answer === 0);
}