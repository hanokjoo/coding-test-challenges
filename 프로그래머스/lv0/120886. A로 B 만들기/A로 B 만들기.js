function solution(before, after) {
    return (JSON.stringify([...before].sort()) 
            === JSON.stringify([...after].sort())) ? 1 : 0;
    
    /* 참고할 만한 코드 - join()으로 문자열 만들어서 비교하면 됨
    return before.split('').sort().join('') 
            === after.split('').sort().join('') ? 1 : 0;
    */
}