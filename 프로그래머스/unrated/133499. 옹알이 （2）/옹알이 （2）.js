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
    console.log(filteredBabbling);   
    return filteredBabbling.filter(word => word.replaceAll("_", "") === "").length;
}