function solution(triangle) {    
    let afterHap = triangle[triangle.length - 1];
    for (let i = triangle.length - 1; i > 0; i--) {
        afterHap = hap(triangle[i - 1], afterHap);
    }
    
    return afterHap[0];
}

function hap(row1, row2) {
    let result = [];

    for (let i = 0; i < row1.length; i++) {
        result.push(row1[i] + Math.max(row2[i], row2[i + 1]));
    }
    
    return result;
}
// start(16:02) ~ end (17:50)