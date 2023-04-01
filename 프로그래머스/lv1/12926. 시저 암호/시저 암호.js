function solution(s, n) {
    // const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    //                "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    //                "u", "v", "w", "x", "y", "z", "a"];
    // const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
    //                "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
    //                "U", "V", "W", "X", "Y", "Z", "A"];
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
    
    // for (let i = 0; i < s.length; i++) {
    //     codeValue = s.charCodeAt(i);
    //     if (codeValue >= 65 && codeValue < 90) {
    //         answer += String.fromCharCode(codeValue + 1);
    //     } else if (codeValue >= 97 || codeValue < 122) {
    //         answer += String.fromCharCode(codeValue + 1);
    //     } else if (codeValue === 90) {
    //         answer += "A";
    //     } else if (codeValue === 122) {
    //         answer += "a";
    //     } else {
    //         answer += " ";
    //     }
    // }
    
    return answer;
}