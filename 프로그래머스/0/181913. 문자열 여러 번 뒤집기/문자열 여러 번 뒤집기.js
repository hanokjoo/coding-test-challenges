function solution(my_string, queries) {
    let arrString = [...my_string];
    for (let que of queries) {
        let temp = [];
        temp.push(arrString.slice(0, que[0]));
        temp.push(arrString.slice(que[0], que[1] + 1));
        temp.push(arrString.slice(que[1] + 1));
        
        for (let i = temp[1].length - 1; i >= 0; i--) {
            temp[0].push(temp[1][i]);   
        }
        
        arrString = temp[0].concat(temp[2]);
    }
    
    return arrString.join("");
}