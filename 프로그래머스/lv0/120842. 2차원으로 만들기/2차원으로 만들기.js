function solution(num_list, n) {
    let answer = [];
    for (let i = 0; i < num_list.length / n; i ++) {    
        answer.push(num_list.slice(i * n, (i + 1) * n));
    }
    return answer;
    
    /* 참고할 만한 코드 - splice 활용
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }
    return answer;
    */
}