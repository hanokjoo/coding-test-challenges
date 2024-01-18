function solution(arr1, arr2) {
    if (arr1.length === arr2.length) {
        let sumArr1 = arr1.reduce((acc, cur) => acc + cur, 0);
        let sumArr2 = arr2.reduce((acc, cur) => acc + cur, 0);
        if (sumArr1 === sumArr2) return 0;
        else if (sumArr1 > sumArr2) return 1;
        else return -1;
    } else if (arr1.length > arr2.length) {
        return 1;
    } else return -1;
}