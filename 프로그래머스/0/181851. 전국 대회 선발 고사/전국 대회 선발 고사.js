function solution(rank, attendance) {
    let answer = [];
    rank.map((e, i) => {
        if (attendance[i]) answer.push([e, i]); 
    });
    
    answer.sort((a, b) => a[0] - b[0]);
    return 10000 * answer[0][1] + 100 * answer[1][1] + answer[2][1];
}