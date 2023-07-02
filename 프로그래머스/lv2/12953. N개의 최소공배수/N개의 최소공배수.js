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