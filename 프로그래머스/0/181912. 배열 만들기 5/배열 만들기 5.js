function solution(intStrs, k, s, l) {
    let answer = [];
    let slicedNum = 0;
    intStrs.map((e) => {
        slicedNum = Number(e.slice(s, s + l));
        if (slicedNum > k) answer.push(slicedNum);
    });
    
    return answer;
}