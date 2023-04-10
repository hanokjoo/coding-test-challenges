function solution(nums) {
    const kind = new Set(nums).size;
    return (kind <= Math.floor(nums.length / 2)) ? kind : Math.floor(nums.length / 2);
}