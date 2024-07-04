function solution(n, left, right) {
    
    let leftQuo = parseInt(left / n) + 1;
    let leftRemain = parseInt(left % n);
    let rightQuo = parseInt(right / n) + 1;
    let rightRemain = parseInt(right % n);
    //console.log(leftQuo, leftRemain, rightQuo, rightRemain);
    
    let answer = [];
    /*
    for (let i = leftQuo; i <= rightQuo; i++) {
        if (i === leftQuo) {
            for (let j = leftRemain; j < n; j++) {
                if (j >= i) answer.push(j + 1);
                else answer.push(i + 1);
            }
        }
        else if (i === rightQuo) {
            for (let j = 0; j <= rightRemain; j++) {
                if (j <= i) answer.push(i + 1);
                else answer.push(j + 1);
            }
        }
        else {
            for (let j = 0; j < n; j++) {
                if (j < i) answer.push(i + 1);
                else answer.push(j + 1);
            }
        }
    }
    //console.log(answer)
    return answer;
    */
    
    //left += 1;
    //right += 1;
    //let repeat = leftRemain;
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
    //console.log(answer);
    return answer;
}
// start: 16:18 ~ end: 17:56