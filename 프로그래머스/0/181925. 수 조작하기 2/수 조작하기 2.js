function solution(numLog) {
    const charList = {
        "1"     : "w",
        "-1"    : "s",
        "10"    : "d",
        "-10"   : "a"
    };
    
    let answer = "";
    for (let i = 0; i < numLog.length - 1; i++) {
        answer += charList[numLog[i + 1] - numLog[i]];
    }
    
    return answer;
}