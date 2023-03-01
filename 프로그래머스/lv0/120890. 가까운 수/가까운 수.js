function solution(array, n) {
    var answer = 0;
    array.sort((a, b) => a - b);
    
    if (array.findIndex((e) => e === n) != -1) return n;
    
    let nextIdx = array.findIndex((e) => e > n);
    if (nextIdx === -1) return array.pop();
    else if (nextIdx === 0) return array[nextIdx];
    let prevIdx = nextIdx - 1;
    
    if (Math.abs(n - array[prevIdx]) <= Math.abs(n - array[nextIdx])) {
        return array[prevIdx];
    } else return array[nextIdx];
}