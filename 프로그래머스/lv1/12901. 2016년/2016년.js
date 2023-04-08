function solution(a, b) {
    const dayEachMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    
    if (a > 1) {
        b += dayEachMonth.slice(0, a - 1).reduce((a, b) => a + b, 0);
    }
    
    return (b % 7 === 0) ? days[6] : days[b % 7 - 1];
}