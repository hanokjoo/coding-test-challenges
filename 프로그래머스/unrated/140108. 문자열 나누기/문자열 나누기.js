function solution(s) {
    if (s.length === 1) return 1;
    
    let firstChar = s[0];
    let correct = 1, incorrect = 0, splitCount = 0;
    /* correnct 변수 하나만 써서 같으면 +, 다르면 -로 해서 0일 때 문자분리를 해도 된다. */
    for (let i = 1; i < s.length; i++) {
        if (s[i] === firstChar) correct++;
        else incorrect++;
        if (correct === incorrect) {
            splitCount++;
            firstChar = s[i + 1];
        }
        if (i === s.length - 1 && correct !== incorrect) splitCount++;
    }
    return splitCount;
}

/* 참고할 만한 코드 - 재귀함수로 풀이
function solution(s, count = 0) {
    if (!s) return count;
    let [first, ...rest] = s.split("");
    let countSame = 1;
    let countInSame = 0;
    let i = 0;
    for (; i<rest.length; i++) {
        if (rest[i] === first) countSame++;
        else countInSame++;
        if (countSame === countInSame) break;
    }
    return solution(rest.slice(i + 1).join(""), count + 1);
}*/