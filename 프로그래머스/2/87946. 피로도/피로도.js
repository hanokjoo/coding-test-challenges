function goDungeon(pirodo, dungeons, visited, count, answer) {
    for (let i = 0; i < dungeons.length; i++) {
        if ((!visited[i]) && (pirodo >= dungeons[i][0])) {
            visited[i] = true;
            answer.push(count + 1);
            goDungeon(pirodo - dungeons[i][1], dungeons, visited, count + 1, answer);
            visited[i] = false;
        }
    }
}

function solution(k, dungeons) {
    let answer = [];
    let count = 0;
    let visited = new Array(dungeons.length).fill(false);

    goDungeon(k, dungeons, visited, count, answer);
    
    return Math.max(...answer);
    
}