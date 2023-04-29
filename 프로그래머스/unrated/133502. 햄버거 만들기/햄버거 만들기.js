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
            making.splice(-4, 4);
            count++;
        } 
    }
    return count;
    
    /* 참고할 만한 코드 - for문의 인덱스를 되돌린다. 주어지는 큰 배열에서 slice와 splice의 잦은 반복으로 효율성은 따져봐야됨.
    let count = 0;

    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient.slice(i, i + 4).join('') === '1231') {
            count++;
            ingredient.splice(i, 4);
            i -= 3;
        }
    }

    return count;
    */
}