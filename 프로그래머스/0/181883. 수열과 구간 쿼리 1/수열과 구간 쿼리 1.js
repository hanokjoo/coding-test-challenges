function solution(arr, queries) {
    if (queries.length === 0) return arr;
    
    for (let que of queries) {
        if (que[0] === que[1]) arr[que[0]]++;
        else {
            for (let i = que[0]; i <= que[1]; i++) {
                arr[i]++;
            }
        }
    }
    
    return arr;
}