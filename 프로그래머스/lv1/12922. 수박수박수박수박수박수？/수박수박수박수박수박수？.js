function solution(n) {
    return new Array(n).fill("").map((e, idx) => (idx % 2 === 0) ? "수" : "박").join(""); 
    
    /* 참고할 만한 코드 - repeat() 사용
    return "수박".repeat(n).slice(0, n);
    */
}