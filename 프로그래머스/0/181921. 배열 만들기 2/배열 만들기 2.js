function solution(l, r) {
    var answer = [];
    
    for (let i = l; i <= r; i++) {
        if ((i + "").replaceAll(/[05]/g, "") === "") {
            answer.push(i);
        }
    }
    
    return (answer.length > 0) ? answer : [-1];
}