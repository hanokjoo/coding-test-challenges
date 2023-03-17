function solution(my_string) {
    let temp = [];
    [...my_string].forEach((e) => temp.unshift(e));
    return temp.join("");
}