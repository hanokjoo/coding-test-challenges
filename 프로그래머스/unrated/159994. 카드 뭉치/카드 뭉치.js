function solution(cards1, cards2, goal) {
    let currentWord = "", card1 = "", card2 = "";
    while(goal.length > 0 && (cards1.length > 0 || cards2.length > 0)) {
        console.log(goal, cards1, cards2);
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
        /*
        for (let i = 0; i < cards1.length; i++) {
            if (goal[0] === cards1[i]) {
                goal.shift();
                cards1 = cards1.slice(i + 1);
                break;
            }
        }
        
        for (let j = 0; j < cards2.length; j++) {
            if (goal[0] === cards2[j]) {
                goal.shift();
                cards2 = cards2.slice(j + 1);
                break;
            }
        }
        */
    }
    return "Yes";
}