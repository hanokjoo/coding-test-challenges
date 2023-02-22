function solution(A, B) {
    let answer = 0;
    let arrA = Array.from(A);
    let lengthA = arrA.length;
    
    if (A === B) return 0;
    for (let i = 1; i < arrA.length; i++) {
        arrA.unshift(arrA.pop());
        ++answer;
        console.log("strA: ", arrA.join(""));
        if (arrA.join("") === B) return answer;
    }
    
    return -1;
}