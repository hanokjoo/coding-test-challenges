function solution(n, m, section) {
    let answer = 0;
    const wall = new Array(n).fill(1);
    for (const s of section) {
        wall[s - 1] = 0;
    }
    
    let idx = 0;
    while (idx < wall.length) {
        if (wall[idx] === 0) {
            answer++;
            idx += m;
        } else idx++;
    }
    
    return answer;
    
//     for (let i = 0; i < n / m; i++) {
//         if (!wall.slice(i , i + m).every(e => e > 0)) {
//             wall.fill(1, i, i + m);
//             answer++;
//         }
//     }
    
//     if (!wall.slice(Math.floor(n / m)).every(e => e > 0)) {
//         answer++;
//     }
    
//     return answer;
}