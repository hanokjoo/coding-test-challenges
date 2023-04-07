function solution(food) {
    const half = [];
    for (let i = 1; i < food.length; i++) {
        if (food[i] >= 2) {
            half.push((i + "").repeat(Math.floor(food[i] / 2)));
        }
    }
    return half.join("") + "0" + half.reverse().join(""); 
    // 배열 대신 String으로 처리해도 될 듯
    
    /* 참고할 만한 코드
    - 직관적임
    let player1 = [];
    let player2 = [];
    let repeat = 0;
    for (let i = 1; i <= food.length; i++) {
        if (food[i] > 1) {
            repeat = Math.floor(food[i] / 2);
            for (let j = 0; j < repeat; j++)
                player1.push(i)
            for (let k = 0; k < repeat; k++)
                player2.unshift(i)
        }
    }
    player1.push(0);
    player1 = player1.concat(player2);
    return player1.join("");
    */
}