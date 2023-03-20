function solution(letter) {
    const morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    };
    let answer = "";
    letter.split(" ").forEach((e) => {
        if (e !== " ") answer += morse[e];
    });
    return answer;
    
    /* 참고할 만한 코드
    return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '');
    */
}