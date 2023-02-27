function solution(my_string) {
    // ASCII 값 A: 65, Z: 90, a: 97, z: 122
    let answer = "";
    let code = 65;
    
    for (let e of [...my_string]) {
        code = e.charCodeAt();
        if (code >= 65 && code <= 90) {
            answer += String.fromCharCode(code + 32);
        } else {
            answer += String.fromCharCode(code - 32);
        }
    }
    
    return answer;
}