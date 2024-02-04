function solution(my_strings, parts) {
    return parts.map(([a, b], i) => my_strings[i].slice(a, b + 1)).join("");
}