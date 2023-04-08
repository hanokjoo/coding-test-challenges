function solution(s) {
    const answer = [];
    const arrayS = [...s];
    
    let findIdx = -1;
    arrayS.forEach((e, idx) => {   
        findIdx = arrayS.slice(0, idx).lastIndexOf(e);
        if (findIdx !== -1) {
            answer.push(idx - findIdx);
        } else answer.push(findIdx);
    });
    
    return answer;
}