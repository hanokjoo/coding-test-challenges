function solution(players, callings) {
    /*let index = -1;
    for (let call of callings) {
        index = players.indexOf(call);
        [players[index - 1], players[index]] = [players[index], players[index - 1]];
        //console.log(call, players);
    }
    return players;
    */
    
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
}