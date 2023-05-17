function solution(id_list, report, k) {
    let reportedCnt = new Map();
    let sep = [];
    report.forEach(e => {
        sep = e.split(" ");
        if (reportedCnt.get(sep[1])) reportedCnt.get(sep[1]).add(sep[0]);
        else reportedCnt.set(sep[1], new Set().add(sep[0]));
    });
    
    let mailCnt = new Map();
    reportedCnt.forEach((val, key) => {
        if (val.size >= k) {
            for (let user of val.values()) {
                if (mailCnt.get(user)) {
                    mailCnt.set(user, mailCnt.get(user) + 1);
                }
                else mailCnt.set(user, 1);
            }
        }
    });
    return id_list.map(e => {
        if (mailCnt.get(e)) return mailCnt.get(e);
        else return 0;
    });
}