function solution(myString, pat) {
    let answer = 0;
    let length = myString.length;
    for (let i = 0; i < length; i++) {
        if (myString.startsWith(pat)) {
            answer++;
        }
        myString = myString.substring(1);
    }
    
    return answer;
}