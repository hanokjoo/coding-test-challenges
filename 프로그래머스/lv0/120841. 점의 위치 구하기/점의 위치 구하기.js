function solution(dot) {
    if (dot[0] < 0) {
        return (dot[1] < 0) ? 3 : 2;
    } else {
        return (dot[1] < 0) ? 4 : 1;
    }
    
    /* 참고할 만한 코드 - 구조분해할당
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
    */
}