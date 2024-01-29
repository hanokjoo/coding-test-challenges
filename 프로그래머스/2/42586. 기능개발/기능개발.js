function solution(progresses, speeds) {
    let answer = [];
    let cntComplete = 0;
    
    while (progresses.length > 0) {
        progresses = progresses.map((e, i) => e = e + speeds[i]);
        if (progresses[0] >= 100) {
            do {
                progresses.shift();
                speeds.shift();
                cntComplete++;
            } while (progresses[0] >= 100);
            answer.push(cntComplete);
            cntComplete = 0;
        }
    }
    
    return answer;
}
// start(17:01) ~ done(17:26)