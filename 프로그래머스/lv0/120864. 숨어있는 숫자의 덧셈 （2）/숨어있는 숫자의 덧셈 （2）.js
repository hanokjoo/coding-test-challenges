function solution(my_string) {
    let numbers = my_string.match(/\d+/g);
    if (numbers !== null) return numbers.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
    else return 0;
}