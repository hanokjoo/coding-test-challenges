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
    
    let sum = 0, idx = 0;;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        idx = arr.length - i - 1;
        if (sum >= idx) return idx;
    }
    
    return 0;
    
    /* 참고할 만한 코드 - 내림차순 정렬해서 논문 갯수와 인용횟수 비교
    citations = citations.sort((a, b) => b - a);
    var i = 0;
    while(i + 1 <= citations[i]) {
        i++;
    }
    return i;
    */
}