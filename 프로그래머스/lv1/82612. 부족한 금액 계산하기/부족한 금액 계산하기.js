function solution(price, money, count) {
    let spent = 0;
    for (let i = 1; i <= count; i++) {
        spent += price * i;
    }
    spent -= money;
    return (spent > 0) ? Math.abs(spent) : 0;
}