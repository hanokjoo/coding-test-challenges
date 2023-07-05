function solution(elements) {
    let answer = new Set();
    let prepareElements = [];
    for (let e of elements) {
        answer.add(e);
    }
    
    for (let i = 2; i <= elements.length; i++) {
        prepareElements = elements.concat(elements.slice(0, i));
        for (let j = 0; j < elements.length; j++) {
            answer.add(prepareElements.slice(j, j + i).reduce((a, c) => a + c, 0));
        }
    }
    return answer.size;
}