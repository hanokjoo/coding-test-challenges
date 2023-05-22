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
    2. v[0] 또는 v.charAt(0)으로 접근하여 toUpperCase() 처리
    -> 1. 과정없이 split하면 연속공백자리에 ""문자열인 v가 생기는데 이걸 v[0]로 접근하면 undefined에 toUpperCase()할 수 없다고 에러나옴.
    -> 1. 과정 없이 하려면 v.charAt(0)로 접근하면 에러없이 ""로 넘어간다. 그러나 제출하는 답안에도 연속공백이 생기므로 
    -> 1. 과정 수행 후 대소문자 처리를 해주는 것이 좋다.
    
    return s.replace(/\s+/g, " ")
        .split(" ")
        .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
        .join(" ");
    */
}