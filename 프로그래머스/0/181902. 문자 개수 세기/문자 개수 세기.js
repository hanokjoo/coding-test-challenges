function solution(my_string) {
    let answer = new Array(52).fill(0);
    let charCode = 0;
    for (let i = 0; i < my_string.length; i++) {
        charCode = my_string.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) answer[charCode - 65]++;
        else if (charCode >= 97 && charCode <= 122) answer[charCode - 71]++;
    }
    
    return answer;
}