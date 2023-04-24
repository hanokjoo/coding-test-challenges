function solution(keymap, targets) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                     "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                     "U", "V", "W", "X", "Y", "Z"];
    let alphMap = new Map();
    
    let idx = 0;
    alphabet.forEach(e => {
        keymap.forEach(key => {
            idx = key.indexOf(e) + 1;
            if (!alphMap.has(e) && idx !== 0) {
                alphMap.set(e, idx);
            } else if (alphMap.get(e) !== 0 && idx !== 0) {
                if (idx < alphMap.get(e)) {
                    alphMap.set(e, idx);
                }
            }
        });
        if (!alphMap.has(e)) alphMap.set(e, -1);
        idx = 0;
    });
    
    targets = targets.map(e => {
        const replaced = [...e].map(c => alphMap.get(c));
        if (replaced.indexOf(-1) >= 0) return -1;
        else return replaced.reduce((a, c) => a + c, 0);
    });
    
    return targets;
}