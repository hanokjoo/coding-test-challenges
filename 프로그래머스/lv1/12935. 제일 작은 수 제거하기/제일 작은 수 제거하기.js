function solution(arr) {
    if (arr.length === 1) return [-1];
    
    let found = arr[0];
    arr.forEach((e) => {
        if (e < found) found = e;
    });
    return arr.filter((e) => e > found);
}