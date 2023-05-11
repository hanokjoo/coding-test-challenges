function solution(babbling) {
    const filteredBabbling = babbling.map(word => {
        if (word.match(/(ma){2,}|(aya){2,}|(ye){2,}|(woo){2,}/g) === null)  {
            word = word.replace(/aya/g, "_");
            word = word.replace(/ye/g, "_");
            word = word.replace(/woo/g, "_");
            word = word.replace(/ma/g, "_");
            return word;
        } 
        return word;        
    });
    return filteredBabbling.filter(word => word.replaceAll("_", "") === "").length;
    
    /* 참고할 만한 코드
    1. 정규식 활용해서 간결하게
    1_1.
    const regexp1 = /(aya|ye|woo|ma)\1+/;
    const regexp2 = /^(aya|ye|woo|ma)+$/;

    return babbling.reduce((ans, word) => (
        !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
    ), 0);
    
    1_2.
    let reg = new RegExp("^(aya(?!(aya))|ye(?!(ye))|woo(?!(woo))|ma(?!(ma)))+$");
    return babbling.reduce((acc, cur) => {
        return reg.test(cur) ? acc + 1 : acc;
    }, 0);
    
    2. 정규식 없이 repeat() 활용해서
    const babblables = ["aya", "ye", "woo", "ma"];

    return babbling.reduce((possible, babbl, index) => {
        for (let i = 0; i < babblables.length; i += 1) {
            if (babbl.includes(babblables[i].repeat(2))) return possible;
        }

        for (let i = 0; i < babblables.length; i += 1) {
            babbl = babbl.split(babblables[i]).join(' ').trim();
        }

        if (babbl) return possible;

        return possible += 1;
    }, 0);
    */
}