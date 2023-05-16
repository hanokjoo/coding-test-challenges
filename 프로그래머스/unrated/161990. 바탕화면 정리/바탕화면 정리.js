function solution(wallpaper) {
    let [lux, luy, rdx, rdy] = [-1, -1, -1, -1];
    wallpaper.forEach((row, idx) => {
        [...row].forEach((e, idx2) => {
           if (e === "#") {
               lux = (lux !== -1) ? Math.min(lux, idx2) : idx2;
               luy = (luy !== -1) ? Math.min(luy, idx) : idx;
               rdx = (rdx !== -1) ? Math.max(rdx, idx2) : idx2;
               rdy = (rdy !== -1) ? Math.max(rdy, idx): idx;
           } 
        });
    });
    
    return [luy, lux, rdy + 1, rdx + 1];
    
    
    /* 참고할 만한 코드
    1. 첫 좌표 설정을 이렇게 해도 된다.
    let [x1, y1, x2, y2] = [wallpaper.length, wallpaper[0].length, 0, 0];
    // x1 => min i
    // x2 => max i
    // y1 => min idx
    // y2 => max idx
    wallpaper.forEach((paper, i) => {
        if (paper.includes('#')) {
            x1 = Math.min(x1, i);
            y1 = Math.min(y1, paper.indexOf('#'));
            x2 = Math.max(x2, i);
            y2 = Math.max(y2, paper.lastIndexOf('#'));
        }
    });
    return [x1, y1, x2 + 1, y2 + 1];
    
    2. 파일의 모든 좌표를 구해서 최소, 최대값으로 구한다.
    let left = [], top = [], right = [], bottom = [];
    wallpaper.forEach((v,i) => {
        [...v].forEach((val,ind) => {
            if(val === "#") {
                left.push(i);
                top.push(ind);
                right.push(i + 1);
                bottom.push(ind + 1);
            }
        });
    });
    return [Math.min(...left), Math.min(...top), Math.max(...right), Math.max(...bottom)];
    */
}