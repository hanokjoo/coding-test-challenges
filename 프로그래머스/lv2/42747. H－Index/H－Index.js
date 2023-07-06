function solution(citations) {
    if (citations.length === 1) return citations[0];
    const counter = {};
    let max = 0;
    for (let e of citations) {
        if (counter[e]) counter[e]++;
        else counter[e] = 1;
        if (max < e) max = e;
    }
    
    const arr = new Array(max).fill(0);
    for (const [k, v] of Object.entries(counter)) {
        arr[k] = v;
    }
    arr.reverse();
    //console.log(arr);
    let sum = 0, idx = 0;;
    for (let i = 0; i < arr.length; i++) {
        //if (arr[i] !== 0) {
            sum += arr[i];
            idx = arr.length - i - 1;
            //console.log(sum, idx);
            if (sum >= idx) return idx;
        //}
    }
    
    return 0;
}