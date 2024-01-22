function solution(myString) {
    // a ascii code : 97, l ascii code: 108
    return [...myString].map((e) => (e.charCodeAt(0) < 108) ? "l" : e).join("");
}