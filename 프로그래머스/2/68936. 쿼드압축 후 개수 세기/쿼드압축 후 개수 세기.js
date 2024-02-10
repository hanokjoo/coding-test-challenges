function solution(arr) {
    if (arr.length === 1) {
        if (arr[0][0] === 0) return [1, 0];
        else return [0, 1];
    }
    
    let sliceIndex = arr.length / 2;
    
    arr = doSliceAndPress(arr, sliceIndex);  
    sliceIndex = sliceIndex / 2;
    
    do {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                arr[i] = doSliceAndPress(doChunk(arr[i], sliceIndex * 2), sliceIndex);
            }
        }
        
        if (sliceIndex >= 2) arr = arr.flat();
        sliceIndex = sliceIndex / 2;
    } while (sliceIndex >= 1);
    
    arr = arr.flat();
    
    if (arr.every((e) => e === 0)) return [1, 0];
    else if (arr.every((e) => e === 1)) return [0, 1];
    
    return arr.reduce((a, c) => {
        if (c === 0) a[0]++;
        else if (c === 1) a[1]++;
        return a;
    }, [0, 0]);
}

function doChunk(arr, length) {
    let result = [];
    for (let i = 0; i < arr.length; i += length) {
        result.push(arr.slice(i, i + length));
    }
    
    return result;
}

function doSliceAndPress(arr, sliceIndex) {
    let slicedArr = Array.from(Array(4), () => new Array());
    arr.map((row, i) => {
        if (i < sliceIndex) {
            for (let j = 0; j < row.length; j++) {
                if (j < sliceIndex) {
                    if (Array.isArray(row)) slicedArr[0].push(row[j]);
                    else slicedArr[0].push(row);
                } else {
                    if (Array.isArray(row)) slicedArr[1].push(row[j]);
                    else slicedArr[1].push(row);
                }
            } 
        } else {
            for (let j = 0; j < row.length; j++) {
                if (j < sliceIndex) {
                    if (Array.isArray(row)) slicedArr[2].push(row[j]);
                    else slicedArr[2].push(row);
                } else {
                    if (Array.isArray(row)) slicedArr[3].push(row[j]);
                    else slicedArr[3].push(row);
                }
            }
        }
    });

    return slicedArr.reduce((a, c) => {
        if (c.every((e) => e === 0)) a.push(0);
        else if (c.every((e) => e === 1)) a.push(1);
        else a.push(c);
        return a;
    }, []);
}

/*
day1: start(21:50) ~ end(23:34) 
day2: start(16:30) ~ end(17:40)
*/