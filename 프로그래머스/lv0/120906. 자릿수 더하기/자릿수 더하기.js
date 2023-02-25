function solution(n) {
    return new Function('return ' + [...n.toString()].join("+"))();
}