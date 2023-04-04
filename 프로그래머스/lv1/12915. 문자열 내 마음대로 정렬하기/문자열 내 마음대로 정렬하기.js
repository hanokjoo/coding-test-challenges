function solution(strings, n) {
    return strings.sort().sort((a, b) => {
        return (a[n] >= b[n]) ? 1 : -1;
    });
    
    /* 참고할 만한 코드
    - n번째 글자를 요소들 맨 앞에 붙여 정렬 후 다시 제거하는 방법
    for (var i = 0; i < strings.length; i++) {
        var chu = strings[i][n];
        strings[i] = chu + strings[i];
    }
    strings.sort();
    for (var j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0],"");
        answer.push(strings[j])
    }
    
    - localCompare() 사용
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
    */
}