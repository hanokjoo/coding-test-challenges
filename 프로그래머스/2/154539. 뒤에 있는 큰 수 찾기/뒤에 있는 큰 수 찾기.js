function solution(numbers) {
    let answer = [];
    let stack = [];
    let maximum = 0;
    
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] >= maximum) {
            maximum = numbers[i];
            answer.push(-1);
            stack = [numbers[i]];
        } else {
            while (1) {
                let j = 0;
                if (stack[j] > numbers[i]) {
                    answer.push(stack[j]);
                    stack.unshift(numbers[i]);
                    break;
                } else {
                    stack.shift()
                }
            }
        }
    }
        
    return answer.reverse();
}