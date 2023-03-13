function solution(box, n) {
    return box.map((e) => parseInt(e / n)).reduce((acc, cur) => acc * cur, 1);
    
    /* 참고할 만한 코드
    - 배열에 변수를 넣어서 선언할 수 있다.
    let [width, length, height] = box;
    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
    
    - 내 코드의 간략버전
    return box.reduce((acc,v) => acc * Math.floor(v / n), 1);
    */
}