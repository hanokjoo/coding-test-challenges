function solution(array, height) {
    return array.filter((e) => e > height).length;
    
    /* 참고할 만한 코드 - map 활용
    let result = 0;
    array.map((arr) => height < arr && result++);
    return result;
    */
}