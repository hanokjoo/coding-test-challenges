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
}