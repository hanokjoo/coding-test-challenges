function solution(s) {
    let count = 1;
    let answer = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            answer += " ";
            count = 1;
        } else {
            answer += (count % 2 === 0) ? s[i].toLowerCase() : s[i].toUpperCase();
            count++;
        }
    }
        
    return answer;
    
    /* 참고할 만한 코드
    - 정규식 사용
    return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();});
    
    - split(), join() 사용
    return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j.toLowerCase()).join('')).join(' ');
    */
                            
}