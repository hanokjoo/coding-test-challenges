function solution(N, stages) {
    const countUser = new Array(N + 1).fill(0);
    let temp = stages.forEach((s) => {
       countUser[s - 1]++; 
    });
    
    const answer = [];
    let sumUsers = 0;
    for (let i = N; i >= 0; i--) {
        sumUsers += countUser[i];
        if (countUser[i] === 0) answer.unshift([i + 1, 0]);
        else {
            answer.unshift([i + 1, countUser[i] / sumUsers]);
        }
    }
    
    answer.pop();
    //console.log(answer);
    return answer.sort((a, b) => {
        if (b[1] === a[1]) return a[0] - b[0];
        else return b[1] - a[1]
    }).reduce((a, c) => {
        a.push(c[0]);
        return a;
    }, []);
}