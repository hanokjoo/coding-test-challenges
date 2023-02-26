function solution(s) {
    return [...s].sort().join("").replace(/(([a-z])\2{1,})/g, "");;
}