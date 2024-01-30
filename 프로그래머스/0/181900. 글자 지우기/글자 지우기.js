function solution(my_string, indices) {
    my_string = [...my_string];
    indices.map((e) => my_string[e] = "");
    return my_string.join("");
}