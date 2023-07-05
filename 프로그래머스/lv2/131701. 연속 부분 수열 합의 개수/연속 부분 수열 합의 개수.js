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
    
    /* 참고할 만한 코드 - elements를 잘라 붙이지 말고 두 개 붙여서 준비
    const circular = elements.concat(elements);
    const set = new Set();
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;
        for (let j = 0; j < elements.length; j++) {
            sum += circular[i + j];
            set.add(sum);
        }
    }
    return set.size;
    */
}