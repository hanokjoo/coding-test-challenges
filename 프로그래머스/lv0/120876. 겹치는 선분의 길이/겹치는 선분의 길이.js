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
}