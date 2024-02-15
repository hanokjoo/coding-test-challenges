function solution(phone_book) {
    phone_book = phone_book.sort();
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) return false;
    }
    
    return true;
}
// start(14:58) ~ end(16:24)