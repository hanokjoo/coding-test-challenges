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
    
    /* 참고할 만한 코드 - 다른 정규식 활용
      const bonus = {'S': 1, 'D': 2, 'T': 3},
          options = {'*': 2, '#': -1, '': 1};

    let darts = dartResult.match(/\d{1,}[SDT][*#]?/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(\d{1,})([SDT])([*#]?)/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
    */
    
}