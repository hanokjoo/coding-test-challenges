function solution(dot) {
    if (dot[0] < 0) {
        return (dot[1] < 0) ? 3 : 2;
    } else {
        return (dot[1] < 0) ? 4 : 1;
    }
}