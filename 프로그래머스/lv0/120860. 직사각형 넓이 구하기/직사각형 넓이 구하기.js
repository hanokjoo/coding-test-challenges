function solution(dots) {
    dots.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        else return a[1] - b[1];
    });
    
    return (dots[2][0] - dots[0][0]) * (dots[1][1] - dots[0][1]);
    
    /* 참고할 만한 코드
     let x = [], y = [];

    for (let pos of dots) {
        x.push(pos[0]);
        y.push(pos[1]);
    }

    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
    */
}