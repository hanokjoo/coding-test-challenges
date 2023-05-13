function solution(survey, choices) {
    const indicators = [["R", "T"], ["C", "F"], ["J", "M"], ["A", "N"]];
    const point = [3, 2, 1, 0, 1, 2, 3];
    let scores = new Map();
    scores.set("R", 0);
    scores.set("T", 0);
    scores.set("C", 0);
    scores.set("F", 0);
    scores.set("J", 0);
    scores.set("M", 0);
    scores.set("A", 0);
    scores.set("N", 0);
    
    let type = "";
    for (let i = 0; i < survey.length; i++) {
        if (choices[i] < 4) {
            type = survey[i][0];
        } else if (choices[i] === 4) continue;
        else {
            type = survey[i][1];
        }
        scores.set(type, scores.get(type) + point[choices[i] - 1]);
    }
    
    let answer = "";
    indicators.forEach(e => {
        if (scores.get(e[0]) > scores.get(e[1])) {
            answer += e[0];
        } else if (scores.get(e[0]) < scores.get(e[1])) {
            answer += e[1];
        } else {
            answer += (e[0] < e[1]) ? e[0] : e[1];
        }
    });
    
    return answer;
    
    /* 참고할 만한 코드
    1. 구조분해할당으로 survey 지표 나눔, 절대값으로 점수 구하기
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];

    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )

    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
    */
}