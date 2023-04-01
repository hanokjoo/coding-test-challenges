function solution(d, budget) {
    let result = 0;
    d = d.sort((a, b) => a - b);
    for (let e of d) { 
        if (budget >= e) {
            budget -= e;
            result++;
        } else return result;
    }
    return result;
    
    /* 참고할 만한 코드 - count에 참/거짓에 따라 1/0 을 더하게 만들었다.
    return d.sort((a, b) => a - b).reduce((count, price) => {
        return count + ((budget -= price) >= 0);
    }, 0);
    */
}