function solution(n_str) {
    let strArr = [...n_str];
    while(strArr[0] === "0") {
        strArr.shift();
    }
    
    return strArr.join("");
}