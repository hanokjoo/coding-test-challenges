function solution(id_pw, db) {
    for (let row of db) {
        if (row[0] === id_pw[0]) {
            if (row[1] === id_pw[1]) return "login";
            else return "wrong pw";
        }
    }
    return "fail";
}