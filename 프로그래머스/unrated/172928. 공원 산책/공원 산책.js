function solution(park, routes) {
    let now = [0, 0];
    let findIdx = -1;
    park = Array.from(park);
    park.forEach((e, idx) => {
        findIdx = e.indexOf("S");
        if (findIdx !== -1) {
            now[0] = idx;
            now[1] = findIdx;
        }
    });

    let dir = "", cell = 0;
    let block = false;
    
    for (let i = 0; i < routes.length; i++) {
        [dir, cell] = routes[i].split(" ");
        cell *= 1;
        
        if (dir === "E") {
            for (let j = 1; j <= cell; j++) {
                if (now[1] + j >= park[0].length ||
                    park[now[0]][now[1] + j] === "X") {
                    block = true;
                    break;
                }
            }
            if (!block) now[1] = now[1] + cell;
        } else if (dir === "W") {
            for (let j = 1; j <= cell; j++) {
                if (now[1] - j < 0 ||
                    park[now[0]][now[1] - j] === "X") {
                    block = true;
                    break;
                }
            }
            if (!block) now[1] = now[1] - cell;
        } else if (dir === "S") {
            for (let j = 1; j <= cell; j++) {
                if (now[0] + j >= park.length ||
                    park[now[0] + j][now[1]] === "X") {
                    block = true;
                    break;
                }
            }
            if (!block) now[0] = now[0] + cell;
        } else if (dir === "N") {
            for (let j = 1; j <= cell; j++) {
                if (now[0] - j < 0 || 
                    park[now[0] - j][now[1]] === "X") {
                    block = true;
                    break;
                }
            }
            if (!block) now[0] = now[0] - cell;
        }
        block = false;
    }
    
    return now;
    
    /* 참고할 만한 코드 - 방향 Object를 만들어서 현재 좌표에서 더해주는 방식으로 체크 후 이동
    const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
        let [x, y] = [0, 0];
        for (let i = 0; i < park.length; i++) {
            if (park[i].includes('S')) {
                [x, y] = [i, park[i].indexOf('S')];
                break;
            }
        }

        routes.forEach((route) => {
            const [r, n] = route.split(' ');
            let [nx, ny] = [x, y];
            let cnt = 0;
            while (cnt < n) {
                [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
                if (!park[nx] || !park[nx][ny] || park[nx][ny] === 'X') break;
                cnt++;
            }
            if (cnt == n) [x, y] = [nx, ny];
        });
        return [x, y];
        */
}