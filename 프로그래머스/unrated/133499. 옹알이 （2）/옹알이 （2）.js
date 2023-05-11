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
    const regexp1 = /(aya|ye|woo|ma)\1+/;
    const regexp2 = /^(aya|ye|woo|ma)+$/;

    return babbling.reduce((ans, word) => (
        !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
    ), 0);
    */
}