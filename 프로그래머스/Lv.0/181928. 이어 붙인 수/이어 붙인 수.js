function solution(num_list) {
    let sumOdd = "";
    let sumEven ="";
    
    for (let e of num_list) {
        if (e % 2 === 0) sumEven += e;
        else sumOdd += e;
    }

    return Number(sumOdd) + Number(sumEven);
}