function solution(arr, queries) {
    let answer = [];
    
    for (let que of queries) {
        let sliced = arr.slice(que[0], que[1] + 1);
        let filtered = sliced.filter((e) => e > que[2] && e > 0);
        
        if (filtered.length === 0) answer.push(-1);
        else {
            let min = Math.min.apply(null, filtered);
            answer.push(min);
        }
    }
    
    return answer;
}