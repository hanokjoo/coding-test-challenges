function solution(phone_book) {
    /*
    let filteredBook = Array.from(Array(9), () => new Array());
    phone_book.reduce((a, c) => {
        if (c.startsWith("1")) a[0].push(c);
        else if (c.startsWith("2")) a[1].push(c);
        else if (c.startsWith("3")) a[2].push(c);
        else if (c.startsWith("4")) a[3].push(c);
        else if (c.startsWith("5")) a[4].push(c);
        else if (c.startsWith("6")) a[5].push(c);
        else if (c.startsWith("7")) a[6].push(c);
        else if (c.startsWith("8")) a[7].push(c);
        else if (c.startsWith("9")) a[8].push(c);
        return a;
    }, filteredBook);
    */
    phone_book = phone_book.sort();
    //console.log(phone_book);
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) return false;
    }
    
    /*
    for (let i = 0; i < filteredBook.length; i++) {
        for (let j = 0; j < filteredBook[i].length; j++) {
            if (filteredBook[i].filter((e) => e.startsWith(filteredBook[i][j]) && e !== filteredBook[i][j]).length > 0) {
                    return false;
            }
        }
    }
    */
    return true;
}
// start(14:58) ~ end(16:24)