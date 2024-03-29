function solution(nums) {
    let sum = new Array();
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                sum.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    let answer = 0;
    sum.forEach(val => {
        if (isPrime(val)) answer++;
    });
    return answer;
}

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}