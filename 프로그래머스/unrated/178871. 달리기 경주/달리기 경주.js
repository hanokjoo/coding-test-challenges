function solution(players, callings) {  
    let playersMap = new Map();
    let rankMap = new Map();
    players.forEach((e, idx) => {
        playersMap.set(e, idx + 1);
        rankMap.set(idx + 1, e);
    });
    
    let currentRank = 0;
    let beNext = "";
    for (let call of callings) {
        currentRank = playersMap.get(call);
        beNext = rankMap.get(currentRank - 1);
        
        playersMap.set(call, currentRank - 1);
        playersMap.set(beNext, currentRank);
        
        rankMap.set(currentRank, beNext);
        rankMap.set(currentRank - 1, call);
    }
    const answer = new Array(players.length);
    playersMap.forEach((v, k) => {
        answer[v - 1] = k;
    });
    return answer;
    
    /* 참고할 만한 코드 - Object 활용해서 풀이
    let obj = {};
    players.forEach((v, idx) => obj[v] = idx);
    for (let i = 0; i < callings.length; i++) {
        let idx = obj[callings[i]];
        let player = players[idx - 1];
        players[idx - 1] = callings[i];
        players[idx] = player;
        obj[callings[i]]--;
        obj[player]++;
    }
    return Object.entries(players).map((v) => v[1]);
    */
}