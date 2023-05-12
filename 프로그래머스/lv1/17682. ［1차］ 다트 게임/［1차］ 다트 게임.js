function solution(dartResult) {
    const powSet = new Map();
    powSet.set("S", 1);
    powSet.set("D", 2);
    powSet.set("T", 3);  
    const queueDart = dartResult.match(/[0-9]{1,2}|[SDT]{1}|[\*\#]{1}/g);
    let score = [0, 0, 0];
    let status = -1;
    queueDart.forEach((e, idx) => {
        if (e.match(/[0-9]{1,2}/g) !== null) {
            if (status < 2) status++;
            score[status] = +e;
        }
        if (e === "S" || e === "D" || e === "T") {
            score[status] = Math.pow(score[status], powSet.get(e));
        }
        if (e === "*") {
            if (status > 0) score[status - 1] *= 2;
            score[status] *= 2;
        }
        if (e === "#") {
            score[status] *= -1;
        }
    });
    
    return score.reduce((a, c) =>  a + c, 0);
    
    
}