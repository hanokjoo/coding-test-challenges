function solution(k, m, score) {
    const classify = new Array(k).fill(0);
    score.reduce((acc, cur) => {
        classify[cur - 1]++;
    }, classify);
    
    let answer = 0;
    let scoreIdx = classify.length - 1;
    let perBox = m;
    while (scoreIdx >= 0) {
        //console.log(scoreidx, )
        if (classify[scoreIdx] > perBox) {
            classify[scoreIdx] -= perBox;
            answer += (scoreIdx + 1) * m;
            perBox = m;
        } else if (classify[scoreIdx] === perBox) {
            answer += (scoreIdx + 1) * m;
            scoreIdx--;
            perBox = m;
        } else {
            perBox -= classify[scoreIdx];
            scoreIdx--;
        } 
    }
    return answer;
}