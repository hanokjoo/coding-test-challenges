function solution(score) {
    let answer = score.map((e) => (e[0] + e[1]) / 2);
    let averages = [...answer.reduce((acc, cur) => {
        acc.set(cur, (acc.get(cur) || 0) + 1);
        return acc;
    }, new Map())].sort((a, b) => b[0] - a[0]);
    
    let ranking = new Map();
    let prevRank = 1;
    for (let i = 0; i < averages.length; i++) {
        ranking.set(averages[i][0] + "", prevRank);
        prevRank += averages[i][1];
    }
    
    for (let i = 0; i < answer.length; i++) {
        answer[i] = ranking.get(answer[i] + "");
    }
    
    return answer;
}