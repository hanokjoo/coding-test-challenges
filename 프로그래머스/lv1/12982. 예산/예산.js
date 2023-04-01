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
}