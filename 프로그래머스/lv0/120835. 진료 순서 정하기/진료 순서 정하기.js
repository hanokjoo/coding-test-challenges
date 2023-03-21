function solution(emergency) {
    let origin = Array.from(emergency);
    let sorted = emergency.sort((a, b) => b - a);
    return origin.map((e) => e = sorted.indexOf(e) + 1);
}