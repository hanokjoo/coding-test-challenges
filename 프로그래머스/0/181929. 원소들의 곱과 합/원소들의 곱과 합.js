function solution(num_list) {
    let multi = 1, sumPow = 0;
    for (let num of num_list) {
        multi *= num;
        sumPow += num;
    }
    return +(multi < Math.pow(sumPow, 2));
}