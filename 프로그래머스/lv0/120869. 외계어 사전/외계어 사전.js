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
    
    /* 참고할 만한 코드 - some() 사용
    return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
    */
}