function solution(board, moves) {
    const reorder = new Array(board[0].length).fill(new Array());
    
    board.forEach((row, i) => {
        row.forEach((e, j) => {
            if (e > 0) {
                reorder[j] = [e].concat(reorder[j]);
            }
        });
    });
    
    const stack = [];
    let answer = 0;
    let pick = 0;
    moves.forEach((m) => {
        if (reorder[m - 1].length !== 0) {
            pick = reorder[m - 1].pop();
            if (stack.length === 0 || stack[stack.length - 1] !== pick) {
                stack.push(pick);
            } else {
                stack.pop();
                answer += 2;
            }
        }
    });
    
    return answer;
    
    /* 참고할 만한 코드 - 행열 안바꾸고 풀이
    var count =0;
    var stack = [];

    for(var i = 0; i < moves.length; i++) {
        var now = moves[i] - 1;
        for (var j = 0; j < board.length; j++) {
            if (board[j][now] != 0) {
                if (stack[stack.length-1] === board[j][now]) {
                    stack.pop();
                    count += 2;
                } else {
                    stack.push(board[j][now]);
                }
                board[j][now] = 0;
                break;
            }
        }
    }
    return count;
    */
}