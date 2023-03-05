function solution(n) {
    let temp = new Array(n).fill(1);
    let lastNum = 1;
    temp = temp.map((e, i) => {
        while ((lastNum % 3) === 0 || ((lastNum + "").match(/3/g) !== null)) {
            lastNum = lastNum + 1;
        };
        e = lastNum;
        lastNum = lastNum + 1;
        return e;
    });
    return temp.pop();
    
    
    /* 참고할 만한 코드
    let arr = [];
    let num = 0;
    while (arr.length !== n && ++num) if (num%3!==0 && !(''+num).includes('3')) arr.push(num);
    return arr.pop();
    */
}