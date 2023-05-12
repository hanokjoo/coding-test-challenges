function solution(number, limit, power) {
    const commonDivCount = new Array(number);
    let getCount = 0;
    for (let i = 1; i <= number; i++) {
        getCount = getDivCount(i);
        if (getCount > limit) commonDivCount[i - 1] = power;
        else commonDivCount[i - 1] = getCount;
    }
    
    return commonDivCount.reduce((a, c) => a + c);
}

function getDivCount(num) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            if (i === Math.sqrt(num)) count++;
            else count += 2;
        }
    }
    return count;
}