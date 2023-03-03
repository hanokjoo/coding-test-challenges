function solution(id_pw, db) {
    for (let row of db) {
        if (row[0] === id_pw[0]) {
            if (row[1] === id_pw[1]) return "login";
            else return "wrong pw";
        }
    }
    return "fail";
    
    /* map 활용
    const [id, pw] = id_pw;
    const map = new Map(db);
    return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
    */
}