function solution(numbers) {
    let digit = new Map();
    digit.set("zero", "0");
    digit.set("one", "1");
    digit.set("two", "2");
    digit.set("three", "3");
    digit.set("four", "4");
    digit.set("five", "5");
    digit.set("six", "6");
    digit.set("seven", "7");
    digit.set("eight", "8");
    digit.set("nine", "9");
    
    for (const [key, value] of digit) {
        numbers = numbers.replaceAll(key, value);
    }
    
    return parseInt(numbers);
}