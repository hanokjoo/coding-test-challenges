function solution(s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    
    let answer = ""; 
    let codeValue = 0;
    
    for (let i = 0; i < s.length; i++) {
        codeValue = s.charCodeAt(i);
        if (codeValue >= 65 && codeValue <= 90) {
            console.log("U ", upper.indexOf(s[i]));
            answer += upper.charAt(upper.indexOf(s[i]) + n);
        } else if (codeValue >= 97 && codeValue <= 122) {
            console.log("L ", lower.indexOf(s[i]));
            answer += lower.charAt(lower.indexOf(s[i]) + n);
        } else {
            answer += " ";
        }
    }
    
    return answer;
    
    /* 참고할 만한 코드 - 대소문자 통합해서 풀이
    var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
    return s.split('').map(e => chars[chars.indexOf(e) + n]).join('');
    */
}