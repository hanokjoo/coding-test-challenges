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
}