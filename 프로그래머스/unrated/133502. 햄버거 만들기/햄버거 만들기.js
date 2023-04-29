function solution(ingredient) {
    if (ingredient.length < 4) return 0;
    
    let count = 0;
    let making = [];
    for (let i = 0; i < ingredient.length; i++) {
        making.push(ingredient[i]);
        if (making.length > 3 
            && making[making.length - 4] === 1
            && making[making.length - 3] === 2
            && making[making.length - 2] === 3
            && making[making.length - 1] === 1) {
            //console.log("1", making);
            making.splice(-4, 4);
            count++;
            //console.log("2", making);
        } 
    }
    
    return count;
}