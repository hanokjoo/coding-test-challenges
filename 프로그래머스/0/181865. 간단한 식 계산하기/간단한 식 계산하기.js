function solution(binomial) {
    let elements = binomial.split(" ");
    switch (elements[1]) {
        case "+" :
            return Number(elements[0]) + Number(elements[2]);
        case "-" :
            return Number(elements[0]) - Number(elements[2]);
        case "*" :
            return Number(elements[0]) * Number(elements[2]);
        default:
            return 0;
    }
}