function solution(lines) {
    let min = Math.min.apply(null, lines.map((e) => e[0]));
    let max = Math.max.apply(null, lines.map((e) => e[1]));
    let range = new Array(max - min).fill("");
    
    lines.map((line) => {
        line[0] = line[0] - min;
        line[1] = line[1] - min;
        return line;
    });
    
    for (let i = 0; i < lines.length; i ++) {
        range = range.map((e, idx) => {
            if (idx >= lines[i][0] && idx < lines[i][1]) {
                return (e + String.fromCharCode(65 + i));
            } else return e + "";
        });
    }
    
    return range.filter((e) => e.length > 1).length;
    
    /* 참고할 만한 코드
    let line = new Array(200).fill(0); // 라인 범위의 line 배열을 0으로 채움
    lines.forEach(([a, b]) => {
      for(; a < b; a++) {
        // lines 배열에 line이 있는 원소에 1씩 추가
        line[a+100]++;
      }
    });
    // 배열을 돌며 1보다 큰(겹쳐진) 라인이 몇개인지 a에 누적 시킴
    return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
    */
}