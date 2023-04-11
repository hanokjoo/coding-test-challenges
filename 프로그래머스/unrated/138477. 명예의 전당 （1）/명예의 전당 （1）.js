function solution(k, score) {
    const honor = [];
    const answer = [];
    score.forEach((todayScore) => {
        if (honor.length < k) {
            honor.push(todayScore);
            answer.push(Math.min(...honor));
        } else {
            honor.sort((a, b) => a - b);
            if (honor[0] < todayScore) honor[0] = todayScore;
            answer.push(Math.min(...honor));
        }
    });
    return answer;
    
    /* 참고할 만한 코드 - reduce()와 push, shift로 풀이
    const stack = [];
    return score.reduce((a,c) => {
        if(stack.length < k) {
            stack.push(c)
            stack.sort((a,b) => a - b)
        }
        else {
            stack.push(c)
            stack.sort((a,b) => a - b)
            stack.shift()
        }
        a.push(stack[0])
        return a
    },[]);
    */
}