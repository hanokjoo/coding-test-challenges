function solution(arr) {
    if (arr.length > arr[0].length) {
        return arr.map((row) => {
            row = row.concat(new Array(arr.length - arr[0].length).fill(0));
            return row;
        });
    } else if (arr.length < arr[0].length) {
        let repeat = arr[0].length - arr.length;
        while (repeat > 0) {
            arr.push(new Array(arr[0].length).fill(0));
            repeat--;
        }
        return arr;
    }
    
    return arr;
}