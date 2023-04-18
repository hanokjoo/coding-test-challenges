function solution(new_id) {
    new_id = new_id.toLowerCase()
        .replace(/[^a-z0-9\-\_\.]/g, "")
        .replace(/\.{2,}/g, ".");
    console.log(new_id);
    if (new_id.startsWith(".")) new_id = new_id.slice(1);
    if (new_id.endsWith(".")) new_id = new_id.slice(0, new_id.length - 1);
    console.log(new_id);
    if (new_id.length === 0) new_id = "a";
    if (new_id.length > 15) new_id = new_id.slice(0, 15);
    console.log(new_id);
    if (new_id.endsWith(".")) new_id = new_id.slice(0, new_id.length - 1);
    if (new_id.length < 3) {
        while(new_id.length < 3) new_id += new_id.slice(-1);
    }
    
    return new_id;
}