function solution(n, words) {
    let toldWord = new Map();
    let members = new Array(n);
    
    let word = "", startChar = "";
    for (let i = 0; i < words.length; i++) {
        word = words[i];
        if (startChar !== "" && word[0] !== startChar) {
            return [i % n + 1, (!members[i % n])? 1 : members[i % n].length + 1];
        }
        if (!members[i % n]) {
            members[i % n] = [word];
        } else {
            members[i % n].push(word);
        }
        if (toldWord.has(word[0])) {
            if (toldWord.get(word[0]).indexOf(word) === -1) {
                toldWord.set(toldWord.get(word[0]).push(word));
            } else {
                return [i % n + 1, members[i % n].length];
            }
        } else {
            toldWord.set(word[0], [word]);
        }
        startChar = word[word.length - 1];
    }

    return [0, 0];
    
    /* 참고할 만한 코드 - reduce() 활용해서 풀이
    let answer = 0;
    words.reduce((prev, now, idx) => {
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);   // 중복단어거나 끝말을 잇지 않은 경우 idx 저장
        return now[now.length-1];   // prev에 이전단어의 마지막 글자 저장
    }, "")

    return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
    */
}