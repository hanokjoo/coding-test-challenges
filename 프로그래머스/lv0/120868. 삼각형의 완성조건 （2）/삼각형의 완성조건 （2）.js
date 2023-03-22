function solution(sides) {
    let answer = 0;
    sides = sides.sort((a, b) => a - b);
    
    let i = sides[1] - sides[0] + 1;
    while(i <= sides[1]) {
        answer++;
        i++;
    }
    
    i = sides[1] + 1;
    while(i < sides[0] + sides[1]) {
        answer++;
        i++;
    }
    return answer;
}