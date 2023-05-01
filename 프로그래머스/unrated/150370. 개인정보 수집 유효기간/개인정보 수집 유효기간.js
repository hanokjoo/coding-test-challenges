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
}