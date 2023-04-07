function solution(food) {
    const half = [];
    for (let i = 1; i < food.length; i++) {
        if (food[i] >= 2) {
            half.push((i + "").repeat(Math.floor(food[i] / 2)));
        }
    }
    return half.join("") + "0" + half.reverse().join(""); 
}