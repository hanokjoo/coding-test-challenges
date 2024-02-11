function solution(n, slicer, num_list) {
    let answer = [];
    
    switch (n) {
        case 1:
            answer = num_list.slice(0, slicer[1] + 1);
            break;
        case 2:
            answer = num_list.slice(slicer[0]);
            break;
        case 3:
            answer = num_list.slice(slicer[0], slicer[1] + 1);
            break;
        case 4:
            num_list.slice(slicer[0], slicer[1] + 1).reduce((a, c, i) => {
                if (i % slicer[2] === 0) a.push(c);
                return a;
            }, answer);
            break;
        default:
            break;
    }
    
    return answer;
}