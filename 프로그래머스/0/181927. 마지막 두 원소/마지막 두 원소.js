function solution(num_list) {
    let lastValue = num_list[num_list.length - 1];
    let secondValue = num_list[num_list.length - 2];
    if (lastValue > secondValue) {
        num_list.push(lastValue - secondValue);
    } else {
        num_list.push(lastValue * 2);
    }
    
    return num_list;
}