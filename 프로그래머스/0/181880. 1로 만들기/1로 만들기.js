function solution(num_list) {
    return num_list.reduce((a, c) => a + makeOne(c), 0);
}

function makeOne(num) {
    let cnt = 0;
    while (num !== 1) {
        if (num % 2 === 0) {
            num = num / 2;
            cnt++;
        } else {
            num = (num - 1) / 2;
            cnt++;
        }
    }
    
    return cnt;
}