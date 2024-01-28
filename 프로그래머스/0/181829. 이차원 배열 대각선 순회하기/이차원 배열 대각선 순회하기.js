function solution(board, k) {
    let answer = 0;
    
    for (let i = 0; i < board.length && i <= k; i++) {
        answer += [...board[i]].reduce((acc, cur, idx) => {
            if (i + idx <= k) acc += cur;
            return acc;
        }, 0);
    }
    
    return answer;
}