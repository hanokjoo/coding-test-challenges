function solution(arr1, arr2) {
    var answer = [];
    
    let newElement = 0;
    let newRow = new Array(arr2[0].length).fill(0);
    
    for (let i = 0; i < arr1.length; i++) {
        answer.push(arr1[i].reduce((acc, cur, idx) => {
            for (let j = 0; j < acc.length; j++) {
                acc[j] += cur * arr2[idx][j];
            }
            return acc;
        }, newRow));
        newRow = new Array(arr2[0].length).fill(0);
    }
        
    /*
    for (let j = 0; j < arr1[i].length; j++) {
        for (let k = 0; k < arr2.length; k++) {
            newElement += arr1[i][k] * arr2[k][j];
            console.log(j, ",", k, ",", arr1[i][k], ",", arr2[k][j]);
        }
        newRow.push(newElement);
        newElement = 0;
        console.log("j ", j, " done");
    }
    answer.push(newRow);  
    newRow = [];
    console.log("i ", i, " done");
    */
    
    return answer;
}