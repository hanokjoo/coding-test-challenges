function solution(s) {
    let answer = 0;
    let temp = "";
    for (let i = 0; i < s.length; i++) {
        temp = s.slice(0, 1);
        s = s.slice(1) + temp;
        answer += isRightString([...s]);
    }
    return answer;
}

function isRightString(arr) {
    let queue = [];
    for (let i = 0; i < arr.length; i++) {
        if (queue.length === 0) queue.push(arr[i]);
        else {
            switch (arr[i]) {
                case ")":
                    //console.log("case ), q:", queue);
                    if (queue.length === 0 || queue[queue.length -1] !== "(") {
                        queue.push(arr[i]);
                    } else {
                        queue.pop();
                    }
                    break;
                case "}":
                    //console.log("case }, q:", queue);
                    if (queue.length === 0 || queue[queue.length -1] !== "{") {
                        queue.push(arr[i]);
                    } else {
                        queue.pop();
                    }
                    break;
                case "]":
                    //console.log("case ], q:", queue);
                    if (queue.length === 0 || queue[queue.length -1] !== "[") {
                        queue.push(arr[i]);
                    } else {
                        queue.pop();
                    }
                    break;
                default:
                    queue.push(arr[i]);
                    break;
            }
        }
    }
    //console.log(arr, ", q:", queue);
    return (queue.length === 0) ? 1 : 0; 
}