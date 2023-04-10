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
    
    
    
}