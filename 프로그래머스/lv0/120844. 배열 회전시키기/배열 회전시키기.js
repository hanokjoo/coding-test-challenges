function solution(numbers, direction) {
    if (direction === "left") {
        numbers.push(numbers.shift());
    } else {
        numbers.unshift(numbers.pop());
    }
    return numbers;
    
    /* 참고할 만한 코드 - 내 코드의 간략버전
    direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
    return numbers;
    */
}