function solution(want, number, discount) {
    let answer = 0;
    
    function countProd(arrDiscount) {
        return arrDiscount.reduce((acc, cur) => {
            if (cur in acc) acc[cur]++;
            else acc[cur] = 1;
            return acc;
        }, {});
    }
    
    for (let i = 0; i <= discount.length - 10; i++) {
        let tenSale = countProd(discount.slice(i, i + 10));
        if (want.map((e, i) => e = ((e in tenSale) && tenSale[e] === number[i])).every((e) => e)) {
            answer++;
        }
    }
    
    return answer;
    
    /* 소요시간: 28분 */
}