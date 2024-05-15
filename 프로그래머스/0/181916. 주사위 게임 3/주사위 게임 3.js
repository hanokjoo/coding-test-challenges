function solution(a, b, c, d) {
    const toSet = new Set([a, b, c, d]);
    if (toSet.size === 1) {
        return 1111 * a;
    } else if (toSet.size === 2) {
        const arr = Array.from(toSet);
        if ([a, b, c, d].filter((e) => e === arr[0]).length === 3) {
            return Math.pow((10 * arr[0] + arr[1]), 2);
        } else if ([a, b, c, d].filter((e) => e === arr[1]).length === 3) {
            return Math.pow((10 * arr[1] + arr[0]), 2);
        } else {
            return (arr[0] + arr[1]) * Math.abs(arr[0] - arr[1]);
        }
    } else if (toSet.size === 3) {
        const arr = Array.from(toSet);
        let answer = 1;
        for (let k of arr) {
            if ([a, b, c, d].filter((e) => e === k).length === 1) {
                answer = answer * k;
            }
        }
        return answer;
    } else {
        return [a, b, c, d].sort().shift();
    }
}