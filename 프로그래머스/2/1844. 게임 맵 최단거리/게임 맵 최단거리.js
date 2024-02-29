function solution(maps) {
    // up, down, left, right
    const dirX = [-1, 1, 0, 0];
    const dirY = [0, 0, -1, 1];
    
    let que = [[0, 0]];
    
    while (que.length) {
        let [x, y] = que.shift();
        
        for (let i = 0; i < 4; i++) {
            let nx = x + dirX[i];
            let ny = y + dirY[i];
            if (nx < 0 || ny < 0 || nx >= maps.length || ny >= maps[0].length) continue;
            if (maps[nx][ny] === 0 || nx === 0 && ny === 0) continue;
            if (maps[nx][ny] === 1) {
                maps[nx][ny] = maps[x][y] + 1;
                que.push([nx, ny]);
            }
        }
    }
    
    if (maps[maps.length -1][maps[0].length -1] === 1) return -1;
    else return maps[maps.length -1][maps[0].length -1];
}
// start(14:35) ~ mid(15:37)
// mid(16:01) ~ end(17:14)