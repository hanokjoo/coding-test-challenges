function solution(spell, dic) {
    let count = 0;
    dic.map((word) => {
        if (word.length >= spell.length) {
            for (const c of spell) {
                word = word.replace(c, "");
            }
            if (word.length === 0) count = count + 1;
        }
    });
    
    return (count > 0) ? 1 : 2;
}