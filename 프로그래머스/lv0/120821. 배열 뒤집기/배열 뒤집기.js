function solution(num_list) {
    var answer = [];
    num_list.forEach((e) => answer.unshift(e));
    return answer;
    
    /* 참고할 만한 코드 - reverse() 사용
    return num_list.reverse();
    */
}