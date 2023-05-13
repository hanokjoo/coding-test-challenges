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
}