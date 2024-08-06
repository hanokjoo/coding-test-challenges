function solution(dirs) {
    let passed = new Set();
    let prePosi = [0, 0];
    let position = [0, 0];
    
    if (dirs.length < 2) return dirs.length;
    
    for (let dir of dirs) {
        switch (dir) {
            case 'U':
                prePosi = position.slice();
                position[1]++;
                break;
            case 'D':
                prePosi = position.slice();
                position[1]--;
                break;
            case 'R':
                prePosi = position.slice();
                position[0]++;
                break;
            case 'L':
                prePosi = position.slice();
                position[0]--;
                break;
        }
        
        if (position[0] < -5 || position[0] > 5 || position[1] < -5 || position[1] > 5) {
            position = prePosi.slice();
        } else {
            passed.add([prePosi[0], prePosi[1], position[0], position[1]].join());
            passed.add([position[0], position[1], prePosi[0], prePosi[1]].join());
        }
    }
    
    return passed.size / 2;
}