function solution(friends, gifts) {
    let index = friends.reduce((acc, cur, idx) => {
        acc[cur] = idx;
        return acc;
    }, {});
    let arrHistory = Array.from(Array(friends.length), () => Array(friends.length).fill(0));
    
    for (let gift of gifts) {
        let [s, r] = gift.split(" ");
        arrHistory[index[s]][index[r]]++;
    }
    
    let arrCount = Array.from(Array(arrHistory.length), () => Array(2).fill(0)); // [준 횟수, 받은 횟수]
    for (let i = 0; i < arrHistory.length; i++) {
        for (let j = 0; j < arrHistory[i].length; j++) {
            arrCount[i][0] += arrHistory[i][j];
            arrCount[j][1] += arrHistory[i][j];
        }
    }
   
    let giftRate = [];
    for (let r of arrCount) giftRate.push(r[0] - r[1]);
    
    let willRecv = new Array(arrHistory.length).fill(0);
    for (let i = 0; i < arrHistory.length; i++) {
        for (let j = 0 + i; j < arrHistory[i].length; j++) {  
            if (i === j) continue;
            if (arrHistory[i][j] > arrHistory[j][i]) {    // 준 횟수, 받은 횟수 비교
                willRecv[i]++;
            } else if (arrHistory[i][j] < arrHistory[j][i]) {
                willRecv[j]++;
            } else if (arrHistory[i][j] === arrHistory[j][i] ||
                      (arrHistory[i][j] === 0 && arrHistory[j][i] === 0)) {
                if (giftRate[i] !== giftRate[j]) {
                    if (giftRate[i] > giftRate[j]) willRecv[i]++;
                    else willRecv[j]++;
                }
            }
        }
    }
    return Math.max(...willRecv);
}