function solution(answers) {
    const students = [
        [...'12345'.repeat(Math.ceil(answers.length / 5))],
        [...'21232425'.repeat(Math.ceil(answers.length / 8))],
        [...'3311224455'.repeat(Math.ceil(answers.length / 10))]
    ];
    
    const mark = (ans, student) => {
        return ans.filter((e, idx) => {
            return (e - student[idx] === 0);
        }).length;
    };
    
    const scores = [];
    let score = 0, maxScore = 0;
    students.forEach((student) => {
        score = mark(answers, student);
        if (score > maxScore) maxScore = score;
        scores.push(score);
    });
    
    if (maxScore === 0) return [];
    
    const result = [];
    scores.forEach((s, idx) => {
        if (s === maxScore) result.push(idx + 1);
    });
    
    return result.sort();
    
    /* 참고할 만한 코드 - filter() 세 번 대신 for문에서 동시에 점수를 구한다.
    var answer = [];
    const man1 = [1, 2, 3, 4, 5];
    const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];

    for(let i = 0; i < answers.length; i++) {
        if(answers[i] == man1[i % man1.length]) count[0]++;
        if(answers[i] == man2[i % man2.length]) count[1]++;
        if(answers[i] == man3[i % man3.length]) count[2]++;
    }

    const max = Math.max(count[0], count[1], count[2]);
    for(let i = 0; i < count.length; i++) {
        if(max == count[i]) answer.push(i + 1);
    }

    return answer;
    */
}