function solution(i, j, k) {
    let array = [];
    
    for (let a = i; a <= j; a++) {
        array.push(a + '');
    }
    
    return array.join("").replace(new RegExp(`[^${k}]`, "g"), "").length;
}