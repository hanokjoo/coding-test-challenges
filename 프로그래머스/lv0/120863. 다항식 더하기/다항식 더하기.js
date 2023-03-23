function solution(polynomial) {
    let countX = 0, sumNum = 0;
    polynomial.split("+").map((e) => e.trim()).forEach((e) => {
        if (e.endsWith("x")) {
            if (e.length === 1) countX++;
            else countX += Number(e.replace("x", ""));
        } else {
            sumNum += Number(e);
        }
    });
    
    if (countX === 0 && sumNum === 0) return "0";
    let answer = (countX !== 0) ? (countX === 1) ? "x" : countX + "x" : "";
    answer += (sumNum !== 0) ? (countX !== 0) ? " + " + sumNum : sumNum : "";
    return answer;
}