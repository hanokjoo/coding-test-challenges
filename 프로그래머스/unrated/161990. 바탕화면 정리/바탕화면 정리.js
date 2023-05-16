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
    console.log("->", lux, luy, rdx, rdy);
    return [luy, lux, rdy + 1, rdx + 1];
}