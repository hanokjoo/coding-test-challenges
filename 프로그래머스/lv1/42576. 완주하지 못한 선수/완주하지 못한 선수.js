function solution(participant, completion) {
    const obj = {};
    participant.forEach(e => {
        if (obj[e] > 0) obj[e]++;
        else obj[e] = 1;
    });
    completion.forEach(e => {
        obj[e]--;
    });
    for (const [k, v] of Object.entries(obj)) {
        if (v > 0) return k;
    }
    
    /* 시간초과 나옴 - filtered의 배열에서 completion 선수를 찾아 삭제하는 게 오래걸리는 듯
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
                      "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
                      "y", "z"];
    const filtered = new Map();
    for (let ch of alphabet) {
        filtered.set(ch, []);
    }

    participant.forEach(e => {
        filtered.get(e[0]).push(e);
    });
    
    let index = -1;
    for (let i = 0; i < completion.length; i++) {
        index = filtered.get(completion[i][0]).indexOf(completion[i]);
        if (index !== -1) {
            filtered.get(completion[i][0]).splice(index, 1);
        }
    }
    
    let answer = "";
    filtered.forEach((v, k) => {
        if (v.length > 0) answer = v[0];
    });
    
    return answer;
    */
}