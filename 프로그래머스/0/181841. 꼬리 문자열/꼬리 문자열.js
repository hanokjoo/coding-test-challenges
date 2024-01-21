function solution(str_list, ex) {
    let answer = "";
    for (let e of str_list) {
        if (e.indexOf(ex) < 0) answer += e;
    }
    
    return answer;
}