function solution(myString, pat) {
    const reg = new RegExp(pat, "i");
    return (myString.search(reg) > -1) ? 1 : 0;
}