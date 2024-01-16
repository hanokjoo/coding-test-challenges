function solution(num_list, n) {
    let part1 = num_list.slice(0, n);
    let part2 = num_list.slice(n);
    return part2.concat(part1);
}