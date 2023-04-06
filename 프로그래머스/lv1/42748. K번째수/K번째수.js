function solution(array, commands) {
    let answer = [];
    commands.forEach(([i, j, k]) => {
        answer.push(array.slice(i - 1, j).sort((x, y) => x - y)[k - 1]);
    });   
    return answer;
    
    /* 참고할 만한 코드 - map() 사용, 구조분해할당
    return commands.map(command => {
        const [sPosition, ePosition, position] = command;
        const newArray = array
            .slice(sPosition - 1, ePosition)
            .sort((a,b) => a - b);
        return newArray[position - 1];
    });
    */
}