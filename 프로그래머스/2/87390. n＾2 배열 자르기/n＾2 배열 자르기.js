function solution(n, left, right) { 
    let leftQuo = parseInt(left / n) + 1;
    let leftRemain = parseInt(left % n);
    let rightQuo = parseInt(right / n) + 1;
    let rightRemain = parseInt(right % n);
    
    let answer = [];
    let row = [];
    for (let i = leftQuo; i <= rightQuo; i++) {
        for (let x = 0; x < n; x++) {
            if (x < i) row.push(i);
            else row.push(x + 1);
        }
        
        if (leftQuo === rightQuo) {
            answer = row.slice(leftRemain, rightRemain + 1);
        } else {
            if (i === leftQuo) {
                answer = answer.concat(row.slice(leftRemain));
            } else if (i === rightQuo) {
                answer = answer.concat(row.slice(0, rightRemain + 1))
            } else {
                answer = answer.concat(row);
            }
            row = [];
        }
    }
    return answer;
}
// start: 16:18 ~ end: 17:56

/*
Math.max()를 활용해서 몫과 나머지 활용이 잘 된 예시

function solution(n, left, right) {
    var answer = [];

    for (let i = left; i <= right; i++) {
        answer.push(Math.max(i % n, parseInt(i / n)) + 1)
    }

    return answer;
}
*/