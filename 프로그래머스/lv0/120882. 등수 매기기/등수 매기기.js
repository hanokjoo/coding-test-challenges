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
    
    /* 참고할 만한 코드
    1)
    return score.map((el) => {
        return (
            score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
        );
    });

    2)
    let avg = score.map(v=>(v[0]+v[1])/2);
    let sorted = avg.slice().sort((a,b)=>b-a);
    return avg.map(v=>sorted.indexOf(v)+1);
    
    3)
    const dict = {};
    const rank = score
        .map(([a,b]) => (a+b)/2)
        .sort((a,b) => b-a)
        .forEach((a,i) => dict[a] === undefined ? dict[a] = i+1 : null);
    return score.map(([a,b]) => dict[(a+b)/2]);
    */
}