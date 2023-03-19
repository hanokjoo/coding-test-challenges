function solution(rsp) {
    return [...rsp].map((e) => {
        if (e === "0") return 5;
        else if (e === "2") return 0;
        else if (e === "5") return 2;
    }).join("");
    
    /* 참고할 만한 코드
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    let answer = [...rsp].map(v => arr[v]).join("");
    return answer;
    */
}