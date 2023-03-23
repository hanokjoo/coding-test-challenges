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
    
    /* 참고할 만한 코드
    const arr = polynomial.split(" + ");
    const xNum = arr
                .filter(n => n.includes("x"))
                .map(n => n.replace('x', '') || '1')
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    const num = arr
                .filter(n => !isNaN(n))
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

    let answer = [];
    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    if(num) answer.push(num);

    return answer.join(" + ");
    */
}