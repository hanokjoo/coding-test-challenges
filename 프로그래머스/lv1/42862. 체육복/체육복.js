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
}