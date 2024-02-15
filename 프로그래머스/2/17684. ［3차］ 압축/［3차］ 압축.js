function solution(msg) {
    let arrIndex = ["0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    let answer = [];
    while (msg.length > 0) {
        for (let j = arrIndex.length -1; j >= 0; j--) {
            if (msg.startsWith(arrIndex[j])) {
                answer.push(j);
                arrIndex.push(msg.slice(0, arrIndex[j].length + 1));
                msg = msg.slice(arrIndex[j].length);
                break;
            }
        }
    }
    
    return answer;
} // start(16:44) ~ end(17:32)