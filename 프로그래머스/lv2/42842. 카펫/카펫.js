function solution(brown, yellow) {    
    for (let i = 3; i <= yellow + 2; i++) {
        if ((brown / 2 - i) * (i - 2) === yellow) {
            return [brown / 2 + 2 - i, i];
        }
    }
    return [0, 0];
}