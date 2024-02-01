function solution(arr, queries) {
    for (let que of queries) {
        let temp = arr[que[0]];
        arr[que[0]] = arr[que[1]];
        arr[que[1]] = temp;
    }
    
    return arr;
}