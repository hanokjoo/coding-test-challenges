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
    
    /* 참고할 만한 코드 
    - #, *의 위치를 [1, 1]로 두고 각 숫자를 #, * 기준으로 떨어진만큼으로 설정함.
        1: [4, 1]
        2: [4, 1]
        3: [4, 1]
        4: [3, 1]
        5: [3, 1]
        6: [3, 1]
        7: [2, 1]
        8: [2, 1]
        9: [2, 1]
    2, 5, 8, 0은 어느손이던 좌우로 1칸씩만 차이나므로 전부 1로 설정.

    hand = hand[0] === "r" ? "R" : "L";
    let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2];
    let h = { L: [1, 1], R: [1, 1] };
    return numbers.map(x => {
        if (/[147]/.test(x)) {
            h.L = [position[x], 1];
            return "L";
        }
        if (/[369]/.test(x)) {
            h.R = [position[x], 1];
            return "R";
        }
        let distL = Math.abs(position[x] - h.L[0]) + h.L[1];
        let distR = Math.abs(position[x] - h.R[0]) + h.R[1];
        if (distL === distR) {
            h[hand] = [position[x], 0];
            return hand;
        }
        if (distL < distR) {
            h.L = [position[x], 0];
            return "L";
        }
        h.R = [position[x], 0];
        return "R";
    }).join("");
    */
}