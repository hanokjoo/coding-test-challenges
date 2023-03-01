function solution(my_string) {
    let temp = [];
    for (let e of my_string) {
        if (temp.length === 0 || temp.findIndex((a) => a === e) === -1) {
            temp.push(e);
        }
    }
    return temp.join("");
    
    /* 참고할만한 코드
    function solution(my_string) {
        return [...new Set(my_string)].join('');
    }*/
}