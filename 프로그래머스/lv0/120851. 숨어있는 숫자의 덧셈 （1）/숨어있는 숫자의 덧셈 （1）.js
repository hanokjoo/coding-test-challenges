function solution(my_string) {
    return [...my_string.replace(/[a-zA-Z]/g, "")].reduce((acc, cur) => acc + parseInt(cur), 0);
}