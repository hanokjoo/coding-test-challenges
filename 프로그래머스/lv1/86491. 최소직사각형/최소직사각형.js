function solution(sizes) {
    let horMax = 0, verMax = 0;
    sizes.forEach((e) => {
        if (e[0] >= e[1]) {
            if (horMax < e[0]) horMax = e[0];
            if (verMax < e[1]) verMax = e[1];
        } else {
            if (horMax < e[1]) horMax = e[1];
            if (verMax < e[0]) verMax = e[0];
        }
    });
    
    return horMax * verMax;
    
    /* 참고할 만한 코드 - map()으로 가로 세로 바꾸기
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    });
    return maxSize[0]*maxSize[1];
    */
}