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
}