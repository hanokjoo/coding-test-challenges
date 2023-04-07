function solution(numbers) {
    const answer = [];
    numbers.map((a, idx) => {
        numbers.slice(idx + 1, ).map((b, idx2) => {
            answer.push(a + b);
        });
    });
    
    return [...new Set(answer)].sort((a, b) => a - b);
}