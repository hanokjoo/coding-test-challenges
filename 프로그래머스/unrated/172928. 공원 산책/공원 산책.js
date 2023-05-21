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
}