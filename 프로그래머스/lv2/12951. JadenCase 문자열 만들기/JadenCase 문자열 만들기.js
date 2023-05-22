function solution(s) {
    s.replace(/\s+/g, " ");
    const arr = s.split(" ");
    let newStr = "", answer = [];
    arr.forEach((e, idx) => {
        for (let i = 0; i < e.length; i++) {
           if (i === 0) {
               if (e[i].replace(/\d/g, "") !== "") {
                   newStr += e[i].toUpperCase();
               } else {
                   newStr += e[i];
               }
           }
           else if (i > 0) newStr += e[i].toLowerCase();
        }
        answer.push(newStr);
        newStr = "";
    });
    return answer.join(" ");
    
    /* 참고할 만한 코드
    1. 공백 여러개를 하나로 치환 후 배열로 쪼개기
    2. charAt()으로 접근하여 처리
    (str[index]로 접근하는 것 보다 나은 이유: https://thisthat.dev/string-char-at-vs-string-bracket-notation/)
    
    return s.replace(/\s+/g, " ")
        .split(" ")
        .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
        .join(" ");
    */
}