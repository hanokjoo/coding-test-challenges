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
}