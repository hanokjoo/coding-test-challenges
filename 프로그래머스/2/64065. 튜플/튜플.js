function solution(s) {
    let answer = [];
    
    let madeArr = [...s.slice(2).slice(0, -2).split("},{")].map((e) => e = e.split(","));
    madeArr.sort((a, b) => a.length - b.length);
    
    for (let e of madeArr) {
        if (e.length === 1) answer.push(e[0]);
        else answer.push(getRest(e, answer));
    }
    
    return answer.map((e) => e = +e);
}

function getRest(next, already) {
    for (let c of already) {
       next[next.indexOf(c)] = "";
    }
    
    return next.join("");
}

// start(17: 40) ~ done(18: 12)