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
    
    /* 내 첫번째 풀이 - 시간초과 나옴, filtered의 배열에서 completion 선수를 찾아 삭제하는 게 오래걸리는 듯
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
    
    /* 참고할 만한 코드
    var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1));
    변수를 바꿔보면, 
    var solution = (participant,completion) => participant.find(name => !completion[name]--, completion.map(name => completion[name] = (completion[name] | 0) + 1));
    
    -> Array.find(callback, thisArg); 여기서 thisArg가 먼저 수행되고 callback이 돈다.
    -> completion.map(name => completion[name] = (completion[name] | 0) + 1)이 선행됨.
    -> completion에 {선수명 : 등장횟수}들을 추가함.
    -> participant.find(name => !completion[name]--, thisArg)에서 "!completion[name]"로 완주했으면 !1 또는 !2가 되어 false가 되고 completion의 등장횟수를 하나 차감한다. 반복하다보면 완주자에 없는 참가자일 때 !0으로 true가 되어 그 참가자의 이름을 return하게 된다.
    */
}