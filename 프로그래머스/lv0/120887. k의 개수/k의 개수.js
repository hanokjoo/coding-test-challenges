function solution(i, j, k) {
    let array = [];
    
    for (let a = i; a <= j; a++) {
        array.push(a + '');
    }
    
    return array.join("").replace(new RegExp(`[^${k}]`, "g"), "").length;
    
    /* 참고할 만한 코드
    return Array(j-i+1).fill(i).map((v,i)=>v+i).join('').split(k).length-1;
    */
}