function solution(new_id) {
    new_id = new_id.toLowerCase()
        .replace(/[^a-z0-9\-\_\.]/g, "")
        .replace(/\.{2,}/g, ".");
    if (new_id.startsWith(".")) new_id = new_id.slice(1);
    if (new_id.endsWith(".")) new_id = new_id.slice(0, new_id.length - 1);
    if (new_id.length === 0) new_id = "a";
    if (new_id.length > 15) new_id = new_id.slice(0, 15);
    if (new_id.endsWith(".")) new_id = new_id.slice(0, new_id.length - 1);
    if (new_id.length < 3) {
        while(new_id.length < 3) new_id += new_id.slice(-1);
    }
    
    return new_id;
    
    /* 참고할 만한 코드 - 정규식 활용, padEnd()
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '');        
    return id.padEnd(3, id[id.length-1]);
    */
}