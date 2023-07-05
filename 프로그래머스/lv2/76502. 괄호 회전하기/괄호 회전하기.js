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
                    if (queue.length === 0 || queue[queue.length -1] !== "(") {
                        queue.push(arr[i]);
                    } else {
                        queue.pop();
                    }
                    break;
                case "}":
                    if (queue.length === 0 || queue[queue.length -1] !== "{") {
                        queue.push(arr[i]);
                    } else {
                        queue.pop();
                    }
                    break;
                case "]":
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
    return (queue.length === 0) ? 1 : 0; 
}

/* 참고할 만한 코드
1. map 활용
function solution(s) {
    if(s.length % 2 === 1) return 0;

    let answer = 0;
    const mapping = { "}" : "{", "]" : "[", ")" : "(" };

    for(let i = 0; i < s.length; i++) {
        const stack = [];
        const rotate = s.slice(i) + s.slice(0, i);
        let flag = true;

        for(let j = 0; j < s.length; j++) {
            if(rotate[j] === "[" || rotate[j] === "(" || rotate[j] === "{" )
                stack.push(rotate[j]);
            else {
                const last = stack.pop();
                if(last !== mapping[rotate[j]]) {
                    flag = false
                    break;
                }
            }
        }

        if(flag) answer++;
    }

    return answer;
}

2. 내 코드와 방법은 비슷한데 더 간결함
function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const arr = [];
    const temp = i === 0 ? s : s.slice(i) + s.slice(0, i);
    for (let j = 0; j < temp.length; j++) {
      if (arr[arr.length - 1] === '(' && temp[j] === ')') arr.pop();
      else if (arr[arr.length - 1] === '[' && temp[j] === ']') arr.pop();
      else if (arr[arr.length - 1] === '{' && temp[j] === '}') arr.pop();
      else arr.push(temp[j]);
    }
    if (arr.length === 0) answer++;
  }
  return answer;
}
*/