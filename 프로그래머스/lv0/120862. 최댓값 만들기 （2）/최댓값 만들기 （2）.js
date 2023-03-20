function solution(numbers) {
    let minusMax = 0, plusMax = 0;
    numbers = numbers.sort((a, b) => a - b);
    if (numbers.every((e) => e < 0)) {
        return numbers[0] * numbers[1];
    } else if (numbers.every((e) => e > 0)) {
        return numbers[numbers.length - 1] * numbers[numbers.length - 2];
    } else {
        if (numbers[0] < 0 && numbers[1] < 0) {
            minusMax = numbers[0] * numbers[1];
            plusMax = numbers[numbers.length - 1] * numbers[numbers.length - 2];
            return (minusMax > plusMax) ? minusMax : plusMax; 
        } else {
            return numbers[numbers.length - 1] * numbers[numbers.length - 2];
        }
    }  
}