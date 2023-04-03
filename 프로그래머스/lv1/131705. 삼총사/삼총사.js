function solution(number) {
    let count = 0;
    
    const getSum = (i, j, k) => number[i] + number[j] + number[k];
    
    for (let i = 0; i < number.length - 2; i ++) {
        for (let j = i + 1; j < number.length - 1; j++) {
            for (let k = j + 1; k < number.length; k++) {
                if (getSum(i, j, k) === 0) {     
                    count++;
                }
            }
        }
    }
    return count;
}