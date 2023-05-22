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
}