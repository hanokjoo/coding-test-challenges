function solution(s){
    let countP = Array.from(s).filter((e) => e === "p" || e === "P").length;
    let countY = Array.from(s).filter((e) => e === "y" || e === "Y").length;
    
    if (countP === 0 && countY === 0) return true;
    return (countP === countY);
}