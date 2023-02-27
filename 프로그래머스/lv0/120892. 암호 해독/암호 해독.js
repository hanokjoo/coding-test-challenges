function solution(cipher, code) {
    return [...cipher].reduce((acc, cur, idx) => {
        if ((idx + 1) % code === 0) acc += cur;
        return acc;
    }, '');
}