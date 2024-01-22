function solution(strArr) {
    return strArr.filter((str) => !new RegExp("ad").test(str));
}