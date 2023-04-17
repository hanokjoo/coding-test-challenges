function solution(n, lost, reserve) {
    let index = -1;
    for (let i = 0; i < lost.length; i++) {
        index = reserve.findIndex(r => r === lost[i]);
        if (index > -1) {
            console.log("s", lost[i]);
            lost[i] = 0;
            reserve.splice(index, 1);
        } 
    }
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    for (let i = 0; i < lost.length; i++) {
        if (lost[i] > 0) {            
            console.log(lost[i]);
            index = reserve.findIndex(r => r >= lost[i] - 1 && r <= lost[i] + 1);
            if (index > -1) {
                lost[i] = 0;
                reserve.splice(index, 1);
            }
        }
    } 

    return n - lost.filter(e => e > 0).length;
    
    /* 참고할 만한 코드
    const students = {};
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        students[i] = 1;
    }
    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    for (let i = 1; i <= n; i++) {
        if (students[i] === 2 && students[i-1] === 0) {
                students[i-1]++;
                students[i]--;
        } else if (students[i] === 2 && students[i+1] === 0) {
                students[i+1]++;
                students[i]--;
        }
    }
    for (let key in students) {
        if (students[key] >= 1) {
            answer++;
        }
    }
    return answer;
    */
}