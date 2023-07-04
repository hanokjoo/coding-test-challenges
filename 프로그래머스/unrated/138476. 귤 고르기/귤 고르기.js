function solution(k, tangerine) {
    let answer = 0;
    const quantityPerSize = new Object();
    tangerine.forEach((e) => {
        quantityPerSize[e] = (quantityPerSize[e] || 0) + 1;
    });    
    let sortedQuantity = Object.values(quantityPerSize).sort((a, b) => b - a);
    for (let q of sortedQuantity) {
        answer++;
        if (k > q) k -= q;
        else break;
    }
    
    return answer;
}