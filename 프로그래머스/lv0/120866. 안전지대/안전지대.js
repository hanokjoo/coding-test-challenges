function solution(board) {
    if(board.length === 1) return (board[0][0] === 1) ? 0 : 1;
    
    let foundArr = [];
    board.forEach((row, rowIdx) => {
        row.forEach((e, idx) => {
            if (e === 1) {
                foundArr.push([rowIdx, idx]);
            }
        });
    }); 
    if (foundArr.length === 0) return Math.pow(board.length, 2);
    
    const newRow = new Array(board[0].length).fill(11);
    board.unshift(newRow.slice());
    board.push(newRow.slice());
    board.forEach(function (row, idx) {
        row.unshift("a");
        row.push("a");
    });    
    console.log(board);
    
    for (let found of foundArr) {
        for (let i = found[0]; i <= found[0] + 2; i++) {
            if (i >= board.length) break;
            for (let j = found[1]; j <= found[1] + 2; j++) {
                if (j >= board[i].length) break;
                board[i][j] += 1;    
            }
        }
    }
    
    let answer = 0;
    board.forEach((row) => {
        row.forEach((e) => {
            if(e === 0) answer++;
        }); 
    });
    return answer;
    
    /* 참고할 만한 코드
    let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
    let safezone = 0;

    board.forEach((row, y, self) => row.forEach((it, x) => {
        if (it === 1) return false;
        return outside.some(([oy, ox]) => {
            console.log(oy, ox);
            !!self[oy + y]?.[ox + x] ? false : safezone++;
        });
    }));
    
    */
}