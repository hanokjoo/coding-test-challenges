function solution(array) {
    let count = new Array(1000).fill(0);
    array.forEach((num) => count[num] += 1);
    let max = Math.max(...count); 
    if (count.filter((e) => e === max).length > 1) return -1;
    else return count.findIndex(e => e === max);
    
    /* 참고할 만한 코드
    - map활용해서 카운트
    let m = new Map();
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    m = [...m].sort((a,b)=>b[1]-a[1]);
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
    */
}