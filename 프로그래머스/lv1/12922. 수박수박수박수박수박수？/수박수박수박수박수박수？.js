function solution(n) {
    return new Array(n).fill("").map((e, idx) => (idx % 2 === 0) ? "수" : "박").join(""); 
}