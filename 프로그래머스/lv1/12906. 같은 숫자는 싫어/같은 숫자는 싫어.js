function solution(arr)
{
    if (arr.every((e) => e === arr[0])) return [arr[0]];
    
    let answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        //if (i === arr.length - 1 && arr[i - 1] !== arr[i]) answer.push(arr[i]);
        if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
    }
    return answer;
    
    /** 효율성 통과 안됨
    let answer = [];   
    arr.join("").replace(/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g, (str) => answer.push(str[0] * 1));   
    return answer;
    */
}