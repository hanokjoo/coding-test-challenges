function solution(dots) {
    dots.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        else return a[1] - b[1];
    });
    
    return (dots[2][0] - dots[0][0]) * (dots[1][1] - dots[0][1]);
}