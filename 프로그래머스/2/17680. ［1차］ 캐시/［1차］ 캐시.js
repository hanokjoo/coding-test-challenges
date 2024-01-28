function solution(cacheSize, cities) {
    let arrCache = [];
    let answer = 0;
    
    let index = -1;
    for (let city of cities) {
        city = city.toLowerCase();
        index = arrCache.indexOf(city);
        if (index === -1) {
            arrCache.push(city);
            answer += 5;
            if (arrCache.length > cacheSize) arrCache.shift();
        } else {
            arrCache.splice(index, 1);
            arrCache.push(city);
            answer += 1;
        }
    }
    
    return answer;
}