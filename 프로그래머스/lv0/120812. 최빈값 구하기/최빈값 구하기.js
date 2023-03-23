function solution(array) {
    let count = new Array(1000).fill(0);
    array.forEach((num) => count[num] += 1);
    let max = Math.max(...count); 
    if (count.filter((e) => e === max).length > 1) return -1;
    else return count.findIndex(e => e === max);
}