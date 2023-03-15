function solution(age) {
    return 2022 - age + 1; 
    /* 문제가 2022년 기준이라 이 코드는 에러처리가 됨
    return new Date().getFullYear() - age + 1;
    */
}