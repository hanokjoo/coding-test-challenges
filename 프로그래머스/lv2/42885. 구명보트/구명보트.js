function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    
    while(people.length > 1) {
        if (people[0] + people[people.length - 1] <= limit) {
            //console.log("1:", people[0], people[people.length - 1]);
            answer++;
            people.shift();
            people.pop();
        } else {
            //console.log("2:", people[0], people[people.length - 1]);
            answer++;
            people.pop();
        }
    }
    //console.log("3:", people);
    return people.length + answer;
    
    
    /* 시간초과만 걸림
    let findIdx = -1, findPair = false;
    for (let i = 0; i < people.length; i++) {
        if (people[i] > 0) {
            for (let j = people.length - 1; j >= 0; j--) {
                if (people[j] > -1 && people[j] <= limit - people[i] && i !== j) {
                    answer++;
                    people[i] = -1;
                    people[j] = -1;
                    findPair = true;
                    break;
                }
            }
            if (!findPair) {
                answer++;
                people[i] = -1;
            } else findPare = false;
        }
    }
    
    return people.filter(e => e > -1).length + answer;
    */
    
    /*const half = Math.floor(limit / 2);
    const light = [], middle = [], heavy = [];
    people.forEach(e => {
        if (e < half) light.push(e);
        else if (e === half) middle.push(e);
        else if (e > half) heavy.push(e);
    });
    
    light.sort();
    heavy.sort((a, b) => b - a);
    console.log("l:", light);
    console.log("m:", middle);
    console.log("h:", heavy);
    
    let answer = 0;
    let hIndex = -1, findArr = (light.length > heavy.length) ? [light, heavy] : [heavy, light];
    for(let i = 0; i < findArr[0].length; i++) {
        hIndex = findArr[1].findIndex(e => e === limit - findArr[0][i]);
        if (hIndex > -1) {
            findArr[0][i] = 0;
            findArr[1][hIndex] = 0;
            answer++;
        }
    }
    
    console.log("answer:", answer);
    console.log("l:", light);
    console.log("m:", middle);
    console.log("h:", heavy);
    */
}