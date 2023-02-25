function solution(num, k) {
    let arr = (num + '').split('');
    let index = -1;
    
    for (let i = 0; i < arr.length; i ++) {
        if (parseInt(arr[i]) === k) {
            index = i + 1;
            break;
        }
    }
    
    return index;
}