function solution(number, limit, power) {
    let answer = 0;
    let getCount = 0;
    for (let i = 1; i <= number; i++) {
        getCount = getDivCount(i);
        if (getCount > limit) answer += power;
        else answer += getCount;
    }
    
    return answer;
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