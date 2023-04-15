function solution(X, Y) {
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);
    [...X].map(e => countX[+e]++);
    [...Y].map(e => countY[+e]++);
    
    const pair = [];
    for (let i = 0; i < countX.length; i++) {
        if (countX[i] <= countY[i]) {
            for (let j = 0; j < countX[i]; j++) pair.push(i);
        } else {
            for (let j = 0; j < countY[i]; j++) pair.push(i);
        }
    }
    
    if (pair.length === 0) return "-1";
    if (pair.every(e => e === 0)) return "0";
    return pair.sort((a, b) => b - a).join("");
    
    /* 참고할 만한 코드 - X 순회 후 Y 순회하면서 X와 겹치는지 같이 확인한다.
    let result = '';
    const numObj = {};

    for (const char of X) {
        numObj[char] = (numObj[char] || 0) + 1;
    }

    for (const char of Y) {
        if (!numObj[char]) continue;
        result += char;
        numObj[char]--;
    }

    if (result === '') return '-1';
    if (+result === 0) return '0';
    return [...result]
        .map((num) => +num)
        .sort((a, b) => b - a)
        .join('');    
    */
}