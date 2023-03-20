function solution(age) {
    return [...age.toString()].map((e) => {
        return String.fromCharCode(97 + Number(e));
    }).join("");
}