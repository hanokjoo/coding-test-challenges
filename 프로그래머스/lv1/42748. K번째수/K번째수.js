function solution(array, commands) {
    let answer = [];
    commands.forEach(([i, j, k]) => {
        answer.push(array.slice(i - 1, j).sort((x, y) => x - y)[k - 1]);
    });   
    return answer;
}