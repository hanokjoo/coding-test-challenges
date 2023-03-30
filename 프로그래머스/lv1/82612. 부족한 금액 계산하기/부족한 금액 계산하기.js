function solution(price, money, count) {
    // 반복문 활용
    /*
    let spent = 0;
    for (let i = 1; i <= count; i++) {
        spent += price * i;
    }
    spent -= money;
    return (spent > 0) ? Math.abs(spent) : 0;
    */
    
    // 등차수열의 합 공식 활용
    let spent = count * (2 * price + (count - 1) * price) / 2;
    return (spent - money > 0) ? spent - money : 0;
    
    /* 참고할 만한 코드 - 등차수열의 합 공식을 정리하면 "price * count * (count + 1) / 2" 가 된다.
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
    */
}