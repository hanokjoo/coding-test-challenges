function solution(prices) {
    let answer = [];
    let check = false;
    
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] > prices[j]) {
                answer.push(j - i);
                check = true;
                break;
            }
        }
        if (!check) answer.push(prices.length - i - 1);
        check = false;
    }
    
    answer.push(0);
    return answer;
}