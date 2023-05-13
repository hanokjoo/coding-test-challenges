function solution(lottos, win_nums) {
    if (lottos.every(e => e === 0)) return [1, 6];
    
    let min = 0;
    const see = lottos.filter(e => e !== 0);
    see.forEach(e => {
        if (win_nums.findIndex(num => num === e) !== -1) {
            min++;
        }
    });

    if (see.length === 6 && min === 0) return [6, 6];
    else return [(min === 0) ? 1 : 7 - min - (6 - see.length), (min === 0) ? 6 : 7 - min];
    
    /* 참고할 만한 코드 - rank 설정방식, !0가 true임을 활용, includes로 찾기는 시간 많이 걸릴 수 있음
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
    */
}