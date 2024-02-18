function solution(str_list) {
    const findL = str_list.indexOf("l");
    const findR = str_list.indexOf("r");
    
    if (findL === -1 && findR === -1) return [];
    else if (findL === -1) return str_list.slice(findR + 1);
    else if (findR === -1) return str_list.slice(0, findL);
    else return (findL < findR) ? str_list.slice(0, findL) : str_list.slice(findR + 1);
}