function solution(n, control) {
    let count = new Array(4).fill(0);
    for (let c of control) {
        switch (c) {
            case "w": count[0]++; break;
            case "s": count[1]++; break;
            case "d": count[2]++; break;
            case "a": count[3]++; break;
            default: continue;
        }
    }
    
    return n + count[0] - count[1] + ((count[2] - count[3]) * 10);
}