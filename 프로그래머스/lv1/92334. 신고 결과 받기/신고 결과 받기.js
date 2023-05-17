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
    
    /* 참고할 만한 코드 - 처음부터 set으로 중복신고 제거함
    let reports = [...new Set(report)].map(a => {return a.split(' ')});
    let counts = new Map();
    for (const bad of reports) {
        counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
    }
    let good = new Map();
    for(const report of reports) {
        if(counts.get(report[1]) >= k) {
            good.set(report[0], good.get(report[0]) + 1 || 1);
        }
    }
    let answer = id_list.map(a => good.get(a) || 0);
    return answer;
    */
}