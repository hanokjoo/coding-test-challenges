function solution(start_num, end_num) {
//     let answer = [];
//     for (let i = start_num; i <= end_num; i++) {
//         answer.push(i);
//     }
    
//     return answer;
    
    return new Array(end_num - start_num + 1).fill(0).map((cur, idx) => {
        return start_num + idx;
    });
}