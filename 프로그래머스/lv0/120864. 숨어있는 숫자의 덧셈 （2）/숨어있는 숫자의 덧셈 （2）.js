function solution(my_string) {
    let numbers = my_string.match(/\d+/g);
    if (numbers !== null) return numbers.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
    else return 0;
    
    /* 참고할 만한 코드 - 내 코드의 간략버전
    return s.match(/(\d+)/g)?.reduce((t,m)=>t+Number(m),0) || 0;
    */
}