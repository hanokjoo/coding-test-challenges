function solution(str1, str2) {
    // if (str2.search(`/${str1}/g`) === -1) {
    //     return 0;
    // } else return 1;
    return (str2.indexOf(str1) === -1) ? 0 : 1;
}