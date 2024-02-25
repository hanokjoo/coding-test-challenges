function solution(numbers, target) {
    let formulas = [];
    let i = 0;
    while (i < numbers.length) {
        if (i === 0) {
            formulas.push(numbers[i]);
            formulas.push(numbers[i] * -1);
        } else {
            let temp = [];
            for (let f of formulas) {
                temp.push(f + numbers[i]);
                temp.push(f + (numbers[i] * -1));
            }
            formulas = temp.slice();
        }
        i++;
    }
    
    return formulas.filter((e) => e === target).length;
}
// start(11:28) ~ end(12:10)