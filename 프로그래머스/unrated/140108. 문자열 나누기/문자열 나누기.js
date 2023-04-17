function solution(s) {
    if (s.length === 1) return 1;
    
    let firstChar = s[0];
    let correct = 1, incorrect = 0, splitCount = 0;
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