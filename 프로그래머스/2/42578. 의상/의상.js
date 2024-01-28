function solution(clothes) {
    let answer = 0;
    let sorted = Object.values(clothes.reduce((acc, cur, idx) => {
        if (cur[1] in acc) acc[cur[1]].push(cur[0]);
        else acc[cur[1]] = [cur[0]];
        return acc;
    }, {}));
    
    /** 
    삼차방정식 전개 활용
    (x + a)(x + b)(x + c) = x^3 + (a + b + c)x^2 + (ab + bc + ac)x + abc;
    x = 1 대입한 후 마지막에 -1하면 선택된 카테고리 갯수 별 경우의 수를 모두 구할 수 있다.
    */
    answer = sorted.reduce((a, c) => a = a * (1 + c.length), 1);
    return answer - 1;
    
    /**
    선택된 카테고리 별로 경우의 수를 모두 구해서 더하는 방법
    => 30가지 카테고리에 1벌씩 있는 경우 런타임에러 발생함.
    */
    /*
    answer += sorted.reduce((a, c) => a = a + c.length, 0);
    
    for (let i = 2; i <= sorted.length; i++) {
        let combi = getCombinations(sorted, i);
        answer += combi.reduce((a, c) => {
            a += c.reduce((acc, cur) => {
                acc *= cur.length;
                return acc;
            }, 1);
            return a;
        }, 0);
    }

    return answer;
    */    
}

function getCombinations(arr, num) {
    const results = [];
    if (num === 1) return arr.map((e) => [e]);
    
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, num - 1);
        const attached = combinations.map(v => [fixed, ...v]);
        results.push(...attached);
    });
    
    return results;
}

// start(2: 45) ~ done(4:20)