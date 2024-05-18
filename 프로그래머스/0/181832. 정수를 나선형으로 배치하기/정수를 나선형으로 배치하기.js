function solution(n) {
    var answer = Array.from(Array(n), () => new Array(n));
    
    let row = 0;
    let col = 0;
    let count = 1;
    let direction = 0;
    
    while (count <= Math.pow(n, 2)) {
        doFill(direction);
        direction = (direction + 1) % 4;
    }
    
    function doFill(type) {
        //console.log(type, row, col);
        switch (type) {
            case 0: // right
                while (col < n && !answer[row][col]) {
                    answer[row][col] = count;
                    count++;
                    col++;
                }
                col--;
                row++;
                break;
            case 1: // down
                while (row < n && !answer[row][col]) {
                    answer[row][col] = count;
                    count++;
                    row++;
                }
                row--;
                col--;
                break;
            case 2: // left
                while (col >= 0 && !answer[row][col]) {
                    answer[row][col] = count;
                    count++;
                    col--;
                }
                col++;
                row--;
                break;
            case 3: // up
                while (row >= 0 && !answer[row][col]) {
                    answer[row][col] = count;
                    count++;
                    row--;
                }
                col++;
                row++;
                break;
        }
    }
    
    return answer;
}