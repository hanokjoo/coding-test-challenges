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
    
    /* 참고할 만한 코드
    let answer = 0;
    let painted = 0;
    for(let section of sections) {
        if(painted < section) {
            answer++;
            painted = section + m - 1;
        }
    }
    return answer;
    */
}