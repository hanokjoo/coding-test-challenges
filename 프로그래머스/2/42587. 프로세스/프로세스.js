function solution(priorities, location) {
    let locationNum = new Array(priorities.length).fill(0).map((e, i) => e = i);
    let nowPri = 9;
    let foundIdx = -1;
    let answer = 0;
    
    while(nowPri > 0) {
        foundIdx = priorities.indexOf(nowPri);
        if (locationNum[foundIdx] === location) return answer + 1;
        else if (foundIdx === -1) nowPri--;
        else {
            priorities = priorities.slice(foundIdx).concat(priorities.slice(0, foundIdx));
            locationNum = locationNum.slice(foundIdx).concat(locationNum.slice(0, foundIdx));
            priorities[0] = 0;
            answer++;
        }
    }
    
    return answer;
}
// start(17:43) ~ done(18:17)