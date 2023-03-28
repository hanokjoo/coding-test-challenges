function solution(arr) {
    if (arr.length === 1) return [-1];
    
    let found = arr[0];
    arr.forEach((e) => {
        if (e < found) found = e;
    });
    return arr.filter((e) => e > found);
    
    /* 참고할 만한 코드 - Math.min() 사용
    if (arr.length <= 1) return [-1];
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr;
    */
}