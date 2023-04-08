function solution(a, b) {
    const dayEachMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    
    if (a > 1) {
        b += dayEachMonth.slice(0, a - 1).reduce((a, b) => a + b, 0);
    }
    
    return (b % 7 === 0) ? days[6] : days[b % 7 - 1];
    
    /* 참고할 만한 코드 - Date 객체 사용
    const arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    return arr[new Date(`2016-${a}-${b}`).getDay()];
    */
}

