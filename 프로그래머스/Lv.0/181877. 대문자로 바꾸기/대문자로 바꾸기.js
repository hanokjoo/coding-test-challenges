function solution(myString) {
    let result = "";
    for (let ch of myString) {
        result += ch.toUpperCase();
    }
    return result;
}