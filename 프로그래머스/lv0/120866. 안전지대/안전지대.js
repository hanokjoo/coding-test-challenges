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
    
    /*
    if(board.length === 1) {
        return (board[0][0] === 1) ? 0 : 1;
    }
    
    let foundArr = [];
    board.forEach((row, rowIdx) => {
        row.forEach((e, idx) => {
            if (e === 1) {
                foundArr.push([rowIdx, idx]);
            }
        });
    }); 
    if (foundArr.length === 0) return Math.pow(board.length, 2);
    
    for (let found of foundArr) {
        if (found[0] > 0 && found[1] > 0) {
            for (let i = found[0] - 1; i <= found[0] + 1; i++) {
                if (i >= board.length) break;
                for (let j = found[1] - 1; j <= found[1] + 1; j++) {
                    if (j >= board[i].length) break;
                    board[i][j] += 1;    
                }
            }
        } else if (found[0] === 0) {
            for (let j = found[1] - 1; j <= found[1] + 1; j++) {
                if (j >= board[0].length || j < 0) continue;
                board[0][j] += 1;
                board[1][j] += 1;
            }
        } else if (found[1] === 0) {
            for (let i = found[0] - 1; i <= found[0] + 1; i++) {
                if (i >= board.length || i < 0) continue;
                board[i][1] += 1;    
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
    */
    
    //return 0;
}