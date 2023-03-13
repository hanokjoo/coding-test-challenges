function solution(numbers, k) {
    let prepare = [];
    let repeat = ((k - 1) * 2) / numbers.length;
    for (let i = 0; i < repeat; i ++) {
        prepare = prepare.concat(numbers);
    }
    return prepare[(k - 1) * 2];
    
    /* 참고할 만한 코드
    return numbers[(--k*2)%numbers.length];
    */
}