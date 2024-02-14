function solution(arr) {
    let results = [];
    results.push(arr.slice());
    let flag = false;
    let answer = 0;
    
    while (!flag) {
        results.push(results[results.length - 1].map((e) => {
            if (e >= 50 && e % 2 === 0) e = e / 2;
            else if (e < 50 && e % 2 === 1) e = e * 2 + 1;
            return e;
        }));
                 
        if (JSON.stringify(results[0]) === JSON.stringify(results[1])) flag = true;
        else {
            results.shift();
            answer++;
        }
    }
        
    return answer;
}