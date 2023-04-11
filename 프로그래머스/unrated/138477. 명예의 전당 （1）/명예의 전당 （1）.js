function solution(k, score) {
    const honor = [];
    const answer = [];
    score.forEach((todayScore) => {
        if (honor.length < k) {
            honor.push(todayScore);
            answer.push(Math.min(...honor));
        } else {
            honor.sort((a, b) => a - b);
            if (honor[0] < todayScore) honor[0] = todayScore;
            answer.push(Math.min(...honor));
        }
    });
    return answer;
}