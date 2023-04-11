function solution(k, m, score) {
    const classify = new Array(k).fill(0);
    score.reduce((acc, cur) => {
        classify[cur - 1]++;
    }, classify);
    
    let answer = 0;
    let scoreIdx = classify.length - 1;
    let perBox = m;
    while (scoreIdx >= 0) {
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
    
    /* 참고할 만한 코드 - 정렬하고 남는 수 버린 후 박스단위로 for문 증가하면서 최소값만 뽑아서 더한다.
    let answer = 0;
    const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
    for (let i = 0; i < sortedScore.length; i += m) {
        answer += sortedScore[i] * m;
    }
    return answer;
    */
}