function solution(sizes) {
    let horMax = 0; verMax = 0;
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
}