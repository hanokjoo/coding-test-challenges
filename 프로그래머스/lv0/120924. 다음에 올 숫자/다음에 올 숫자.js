function solution(common) {
    let answer = 0;
    let length = common.length;
    let isCha = (common[0] + common[length - 1] === common[1] + common[length - 2]);    /* true: 등차수열, false: 등비수열 */
    
    if (isCha) {
        return common[length - 1] + (common[1] - common[0]);
    } else {
        return common[length -1] * (common[1] / common[0]);
    }
}