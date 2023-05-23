function solution(s) {
    const answer = [0, 0];
    let removeZero = "";
    while(s !== "1") {
        removeZero = s.replace(/0/g, "");
        answer[1] += s.length - removeZero.length;
        s = removeZero.length.toString(2) + "";
        answer[0]++;
    }
    
    return answer;
}