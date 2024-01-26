function solution(my_string, m, c) {
    let answer = "";
    let rowCnt= 0;
    for (let i = 0; i < my_string.length; i++) {
        if (i === m * rowCnt + c - 1) {
            answer += my_string[i];
            rowCnt++;
        }
    }
    
    return answer;
}