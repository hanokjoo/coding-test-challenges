function solution(s) {
    if (s.startsWith("-")) return s.slice(1) * -1;
    else if (s.startsWith("+")) return s.slice(1) * 1;
    else return s * 1;
}