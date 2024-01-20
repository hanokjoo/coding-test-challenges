function solution(arr, n) {
    const startIndex = (arr.length % 2 === 0) ? 1 : 0;
    for (let i = startIndex; i < arr.length; i += 2) {
        arr[i] = arr[i] + n;
    }
    
    return arr;
    
    // if (arr.length % 2 === 0) {
    //     return arr.map((e, i) => {
    //         if (i % 2 !== 0) {
    //             return e + n;
    //         } else return e;
    //     });
    // } else {
    //     return arr.map((e, i) => {
    //         if (i % 2 === 0) {
    //             return e + n;
    //         } else return e;
    //     });
    // }
}