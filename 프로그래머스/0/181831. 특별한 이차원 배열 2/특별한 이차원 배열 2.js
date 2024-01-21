function solution(arr) {
    let foundNotEqual = false;
    for (let i = 0; i < arr.length; i++) {
        if (foundNotEqual) break;
        for (let j = 0 + i; j < arr[i].length; j++) {
            if (arr[i][j] !== arr[j][i]) foundNotEqual = true;
        }
    }
    
    return +(!foundNotEqual);
}