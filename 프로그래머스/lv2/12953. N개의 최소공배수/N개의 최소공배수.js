function solution(arr) {
    arr.sort((a, b) => a - b);
    let one = arr.findIndex(e => e === 1);
    if (one > -1) arr.splice(arr.findIndex(e => e === 1), 1);
    
    let LCM = arr[0];
    for (let i = 1; i < arr.length; i++) {    
        LCM = LCM * arr[i] / getGCD(LCM, arr[i]); 
    }
    return LCM;
}

function getGCD(a, b) {
    let temp = 0;
    while (b !== 0) {
        temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

/* 참고할 만한 코드 - reduce() 활용
function solution(arr) {
    return arr.reduce((acc, cur) => {
        const recursive = (min, max) => {
          return (min % max) === 0 ? max : recursive(max, min % max);
        }

        let max = 0;
        return acc*cur / recursive(acc,cur);
    });
}
*/