function solution(arr, k) {
    let answer = new Array(k).fill(-1);
    let index = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            answer[index] = arr[i];
            index++;
        } else if (answer.indexOf(arr[i]) === -1) {
            answer[index] = arr[i];
            index++;
        }
        
        if (index === k) break;
    }
    
    return answer;
}