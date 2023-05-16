function solution(numbers, hand) {
    const keys = new Map();
    keys.set(1, [0, 0]);
    keys.set(2, [0, 1]);
    keys.set(3, [0, 2]);
    keys.set(4, [1, 0]);
    keys.set(5, [1, 1]);
    keys.set(6, [1, 2]);
    keys.set(7, [2, 0]);
    keys.set(8, [2, 1]);
    keys.set(9, [2, 2]);
    keys.set("#", [3, 0]);
    keys.set(0, [3, 1]);
    keys.set("*", [3, 2]);
    let left = keys.get("#"), right = keys.get("*");
    
    const answer = [];
    let farLeft = 0, farRight = 0;
    numbers.forEach(num => {
        if (num === 1 || num === 4 || num === 7) {
            answer.push("L");
            left = keys.get(num);
        } else if (num === 3 || num === 6 || num === 9) {
            answer.push("R");
            right = keys.get(num);
        } else {
            farLeft = Math.abs(keys.get(num)[0] - left[0]) + Math.abs(keys.get(num)[1] - left[1]);
            farRight = Math.abs(keys.get(num)[0] - right[0]) + Math.abs(keys.get(num)[1] - right[1]);
            if (farLeft < farRight) {
                answer.push("L");
                left = keys.get(num);
            } else if (farLeft > farRight) {
                answer.push("R");
                right = keys.get(num);
            } else if (farLeft === farRight) {
                if (hand === "left") {
                    answer.push("L");
                    left = keys.get(num);
                } else {
                    answer.push("R");
                    right = keys.get(num);
                }
            }
        }
    });
    
    return answer.join("");
}