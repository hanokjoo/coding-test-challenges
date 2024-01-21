function solution(arr, idx) {
    let findIdx = arr.slice(idx).findIndex((e) => e === 1);
    return (findIdx > -1) ? findIdx + idx : findIdx;
}