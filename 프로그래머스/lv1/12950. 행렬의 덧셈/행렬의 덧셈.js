function solution(arr1, arr2) {
    return arr1.map((row, idxRow) => row.map((e, idxCol) => e + arr2[idxRow][idxCol]));
}