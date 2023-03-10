function solution(keyinput, board) {
    var answer = [0, 0];
    board = board.map((e) => (e - 1) / 2);
    
    for (let input of keyinput) {
        switch (input) {
            case "left":
                answer[0]--;
                if (Math.abs(answer[0]) > board[0]) answer[0]++;
                break;
            case "right": 
                answer[0]++; 
                if (Math.abs(answer[0]) > board[0]) answer[0]--;
                break;
            case "up": 
                answer[1]++; 
                if (Math.abs(answer[1]) > board[1]) answer[1]--;
                break;
            case "down": 
                answer[1]--; 
                if (Math.abs(answer[1]) > board[1]) answer[1]++;
                break;
            default: break;
        }
    }
    
    return answer;
    
    /* 참고할 만한 코드
    let key = {"right" : [1,0], "up" : [0,1], "down" : [0,-1], "left" : [-1,0]};

    let rslt = keyinput.map(v => key[v]).reduce((a,b) => { 
        if (Math.abs(a[0] + b[0]) > board[0]/2 || Math.abs(a[1] + b[1]) > board[1]/2) {
            return [a[0],a[1]];
        }
        return [a[0] + b[0], a[1] + b[1]];
    }, [0,0]);

    return rslt;
    */
}