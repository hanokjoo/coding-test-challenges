function solution(s, skip, index) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
                     'h', 'i', 'j', 'k', 'l', 'm', 'n',
                     'o', 'p', 'q', 'r', 's', 't', 'u',
                     'v', 'w', 'x', 'y', 'z'];
    const filterSkip = alphabet.filter(e => [...skip].findIndex(s => s === e) === -1);
    let filtered = [];
    for (let i = 0; i < filterSkip.length + index; i++) {
        filtered = filtered.concat(filterSkip);
    }
    return [...s].map(e => filtered[filtered.findIndex(s => s === e) + index]).join("");
    
    /* 참고할 만한 코드 - filterSkip의 길이의 나머지로 index를 찾는다. alphabet 필터링 시 정규식 사용도 좋음.
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
    return s.split("").map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length]).join("");
    */
}