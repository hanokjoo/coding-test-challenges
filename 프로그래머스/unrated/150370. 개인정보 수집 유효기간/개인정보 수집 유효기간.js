function solution(today, terms, privacies) {
    const answer = [];
    const termsMap = new Map();
    terms.forEach(e => {
        let temp = e.split(" ");
        termsMap.set(temp[0], temp[1]);
    });
    today = new Date(today.replace(/\./g, "-")).getTime();
    
    privacies.forEach((e, idx) => {
        let temp = e.split(" ");
        temp[0] = new Date(temp[0].replace(/\./g, "-"));
        let endDay = new Date(temp[0].setMonth(temp[0].getMonth() + +termsMap.get(temp[1])));
        if (today >= endDay.getTime()) answer.push(idx + 1);
    });

    return answer;
    
    /* 참고할 만한 코드 - Date 객체 사용 안하고 풀이
    var answer = [];
    var [year, month, date] = today.split(".").map(Number);
    var todates = year * 12 * 28 + month * 28 + date;
    var t = {};
    terms.forEach((e) => {
        let [a, b] = e.split(" ");
        t[a] = Number(b);
    });
    privacies.forEach((e, i) => {
        var [day, term] = e.split(" ");
        day = day.split(".").map(Number);
        var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
        if (dates <= todates) answer.push(i + 1);
    });
    return answer;
  */
}