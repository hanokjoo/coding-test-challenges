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
        //console.log("type: ", type, scores.get(type));
    }
    
    let answer = "";
    indicators.forEach(e => {
        //console.log(e[0], scores.get(e[0]), e[1], scores.get(e[1]));
        if (scores.get(e[0]) > scores.get(e[1])) {
            answer += e[0];
        } else if (scores.get(e[0]) < scores.get(e[1])) {
            answer += e[1];
        } else {
            answer += (e[0] < e[1]) ? e[0] : e[1];
        }
    });
    
    return answer;
}