function solution(cards1, cards2, goal) {
    while(goal.length > 0 && (cards1.length > 0 || cards2.length > 0)) {
        if (goal[0] === cards1[0]) {
            goal.shift();
            cards1.shift();
            continue;
        } else if (goal[0] === cards2[0]) {
            goal.shift();
            cards2.shift();
            continue;
        } else {
            return "No";
        }
    }
    return "Yes";
    
    /* 참고할 만한 코드 - 간단하게 표현 가능
    for (const s of goal) {

        if (cards1[0] === s) {
            cards1.shift();
        } else if (cards2[0] === s) {
            cards2.shift();
        } else {
            return "No"
        }
    }

    return "Yes";
    */
}