function solution(str1, str2) {
    let map1 = new Map();
    let map2 = new Map();
    makeDajung(str1, map1);
    makeDajung(str2, map2);
    
    //if (map1.size === 0 || map2.size === 0) return 65536;

    let gyo = new Map();
    map1.forEach((v, k, m) => {
        if (map2.has(k)) {
            gyo.set(k, (map1.get(k) < map2.get(k)) ? map1.get(k) : map2.get(k));    
        }
    });
    
    let hap = new Map();
    map1.forEach((v, k) => {
        if (map2.has(k)) {
            hap.set(k, (map1.get(k) > map2.get(k)) ? map1.get(k) : map2.get(k));    
        } else hap.set(k, v);
    });
    map2.forEach((v, k) => {
        if (!hap.has(k)) hap.set(k, v);
    });
    
    let sumGyo = 0;
    let sumHap = 0;
    gyo.forEach((v, k) => sumGyo += v);
    hap.forEach((v, k) => sumHap += v);

    if (gyo.size === 0 && hap.size === 0) return 65536;
    else if (gyo.size === 0 && hap.size > 0) return 0;
    else return Math.floor((sumGyo / sumHap) * 65536);
}

function makeDajung(str, result) {
    let tempArr = [];
    let reg = new RegExp("^[a-zA-Z]{2}");
    for (let i = 0; i < str.length - 1; i++) {
        let temp = str[i] + str[i + 1];
        if (reg.test(temp)) {
            tempArr.push(temp.toLowerCase());
        }
    }
    
    if (tempArr.length === 0) return {};
    else return tempArr.reduce((a, c) => {
        if (a.has(c)) {
            a.set(c, a.get(c) + 1);
        } else {
            a.set(c, 1);
        }
        return a;
    }, result);
}