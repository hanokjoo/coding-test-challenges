function solution(my_string) {
    return my_string.replace(/[a-z]/g, "")
        .split("")
        .map((e) => parseInt(e))
        .sort((a, b) => a - b);
}