function solution(n)
{
    let times = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = n - 1;
            times++;
        }
    }
    return ++times;
}