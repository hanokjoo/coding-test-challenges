function solution(num_list) {
    let even = num_list.filter((e) => e % 2 === 0).length;
    return [even, num_list.length - even];
    
    /* 참고할 만한 코드
    - 배열의 주소 활용
    var answer = [0,0];
    
    for(let a of num_list){
        answer[a%2] += 1
    }
    
    return answer;
    
    - reduce 활용
    return list.reduce((acc, cur) => (cur & 1 ? acc[1]++ : acc[0]++, acc), [0, 0])
    */
}