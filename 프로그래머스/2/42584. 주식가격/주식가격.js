function solution(prices) {
    let answer = [];
    let check = false;
    
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            //console.log(i, prices[i], j, prices[j]);
            if (prices[i] > prices[j]) {
                answer.push(j - i);
                //console.log("> ", answer);
                check = true;
                break;
            }
        }
        if (!check) answer.push(prices.length - i - 1);
        check = false;
        //console.log(">> ", answer);
    }
    
    answer.push(0);
    return answer;
}