function solution(word) {
    const alp = ["A", "E", "I", "O", "U"];   
    let dic = [[word[0]], [], [], [], []];
    let maxLength = 1;

    for (let i = 0; i < dic.length - 1; i++) {
        let temp = [];
        for (let pre of dic[i]) {
            for (let next of alp) {
                temp.push(pre + next);
            }
        }
        dic[i + 1] = temp;
    }
    
    dic = dic.reduce((a, c) => {
        return a.concat(c);
    });
    dic.sort();   
    return dic.length * alp.indexOf(word[0]) + dic.indexOf(word) + 1;
    
}
// start(15:14) ~ mid(15:54)
// mid(17:18) ~ end(18:13)