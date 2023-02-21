function solution(babbling) {
    var answer = 0;
    var arrPossible = ["aya", "ye", "woo", "ma"];
    var babblingLength = babbling.length;
    
    var tempStr = "";
    for (var i = 0; i < babblingLength; i++) {
        tempStr = babbling[i];  
        
        if (tempStr.length < 2) continue; 
        for (const word of arrPossible) {
            tempStr = tempStr.replace(word, ".");
        }
        tempStr = tempStr.replace(/\./g, "");
        if (tempStr.length === 0) answer++;
    }
    
    return answer;
}