function solution(my_string, s, e) {
    let answer = new Array(my_string).fill("");
    let k = 0;
    [...my_string].map((ch, i) => {
        if (i === s + k && i <= e) {
            answer[e - k] = ch;
            k++;
        } else answer[i] = ch;
    });
    
    return answer.join("");
}