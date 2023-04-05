function solution(s) {
    if (Number(s)) return s * 1;
    
    new Map([
        ["zero", 0], ["one", 1], ["two", 2], ["three", 3], 
        ["four", 4], ["five", 5], ["six", 6], ["seven", 7], 
        ["eight", 8], ["nine", 9]
    ]).forEach((v, k) => {
        s = s.replace(new RegExp(`${k}`, "g"), v);
    });
    
    return s * 1;
    
    /* 참고할 만한 코드 - 배열의 인덱스 활용, reduce() 사용
    const digit2word = ['zero','one','two','three','four','five','six','seven', 'eight','nine'];
    function solution(s) {
        return Number(digit2word.reduce((ans, word, digit) => ans.replace(new RegExp(word, 'g'), digit), s));
    }
    */
}