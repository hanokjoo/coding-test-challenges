function solution(s) {
    if (s.length === 1) return s;
    
    return [...s].map((ch) => ch.charCodeAt(0))
        .sort((a, b) => b - a)
        .map((ch) => String.fromCodePoint(ch))
        .join("");
}