function solution(nums) {
    const kind = new Set(nums).size;
    return Math.min(kind, Math.floor(nums.length / 2));
}