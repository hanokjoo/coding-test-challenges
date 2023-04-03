function solution(n, arr1, arr2) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        answer.push((arr1[i] | arr2[i]).toString(2)
                    .padStart(n, "0")
                    .replace(/1/g, "#")
                    .replace(/0/g, " "));
    }
    
    return answer;
    
    /* 참고할 만한 코드 - 정규식에 |(or)
    return arr1.map((v, i) => arr2[i].padStart(n, 0)
                    .toString(2))
                    .replace(/1|0/g, a => +a ? '#' : ' '));
    */
}