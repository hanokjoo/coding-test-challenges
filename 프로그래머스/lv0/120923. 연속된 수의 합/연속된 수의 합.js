function solution(num, total) {
    /* 등차수열의 합 = (양 끝항의 산술평균) * (항의 개수) */
    /* 시작하는 정수를 X라고 하면
    total = ((X + (X + num - 1)) / 2) * num;
    total / num = (X + (X + num - 1)) / 2;
    total / num * 2 = X + (X + num - 1);
    (total / num * 2) + 1 - num = 2X;
    X = ((total / num * 2) + 1 - num) / 2; */
    
    let answer = [];
    let startNum = ((total / num * 2) + 1 - num) / 2;
    for (let i = 0; i < num; i++) {
        answer.push(startNum + i);
    }
    return answer;
}