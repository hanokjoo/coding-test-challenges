function solution(s) {
    const arr = s.split(" ");
    arr.sort((a, b) => a - b);
    return arr[0] + " " + arr[arr.length - 1];
    
    /* 참고할 만한 코드 - Math 메소드 활용
    const arr = s.split(' ');
    return Math.min(...arr) + ' ' + Math.max(...arr);
    */
}