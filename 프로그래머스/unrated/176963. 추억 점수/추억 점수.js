function solution(name, yearning, photo) {
    const yearningMap = new Map();
    name.forEach((n, idx) => {
        yearningMap.set(n, yearning[idx]);
    });
    
    return photo.map((shot) => {
        return shot.reduce((a, c) => {
            return a + (yearningMap.get(c) ?? 0);
        }, 0);
    });
}