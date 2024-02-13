function solution(order) {
    let answer = 0;
    order.map((e) => {
        if (e === "anything") answer += 4500;
        else if (e.indexOf("americano") > -1) answer += 4500;
        else if (e.indexOf("cafelatte") > -1) answer += 5000;
    });
    
    return answer;
}