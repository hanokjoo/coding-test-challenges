function solution(price) {
    if (price >= 500000) return Math.floor(price * 0.8);
    else if (price < 500000 && price >= 300000) return Math.floor(price * 0.9);
    else if (price < 300000 && price >= 100000) return Math.floor(price * 0.95);
    else return price;
    
    /* 참고할 만한 코드 - 반복문 활용
    let arr_discount = [[500000, 0.2], [300000, 0.1], [100000, 0.05]];

    for(let i = 0 ; i < arr_discount.length ; i++)
        if(arr_discount[i][0] <= price) return Math.trunc(price * (1-arr_discount[i][1]));      

    return price;
    */
}