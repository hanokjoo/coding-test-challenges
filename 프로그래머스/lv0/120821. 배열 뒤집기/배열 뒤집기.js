function solution(num_list) {
    var answer = [];
    num_list.forEach((e) => answer.unshift(e));
    return answer;
}