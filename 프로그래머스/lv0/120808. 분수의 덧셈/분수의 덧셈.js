function solution(numer1, denom1, numer2, denom2) {
    let div = 2;
    let newNumer = numer1 * denom2 + numer2 * denom1;
    let newDenom = denom1 * denom2;
    while(div <= newNumer || div <= newDenom) { 
        if (newNumer % div === 0 && newDenom % div === 0) {
            newNumer = Math.floor(newNumer / div);
            newDenom = Math.floor(newDenom / div);
        } else div++;
    }
    return [newNumer, newDenom];
    
    /* 참고할 만한 코드 - 최대공약수 구해서 나누기
    function fnGCD(a, b){
        return (a % b) ? fnGCD(b, a % b) : b;
    }

    function solution(denum1, num1, denum2, num2) {
        let denum = denum1 * num2 + denum2 * num1;
        let num = num1 * num2;
        let gcd = fnGCD(denum, num); //최대공약수

        return [denum / gcd, num / gcd];
    }
    */
}