function solution(date1, date2) {
    return (Date.parse(date1.join("-")) < Date.parse(date2.join("-"))) ? 1 : 0;
}