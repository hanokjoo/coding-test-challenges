function solution(s){
    let countP = Array.from(s).filter((e) => e === "p" || e === "P").length;
    let countY = Array.from(s).filter((e) => e === "y" || e === "Y").length;
    
    if (countP === 0 && countY === 0) return true;
    return (countP === countY);
    
    /* 참고할 만한 코드 - reduce() 사용
    return [...s.toLowerCase()].reduce((acc, cur) => {
        if (cur ==='p') return acc + 1;
        else if (cur ==='y') return acc - 1;
        return acc;
    }, 0) ? false : true;
    */
}