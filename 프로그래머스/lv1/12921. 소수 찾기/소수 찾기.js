function solution(n) {
    let answer = 0;
    const numbers = new Array(n + 1).fill(0);
    
    for (let i = 2; i <= n; i++) {
        if (numbers[i] === 1) continue;
        for (let j = 2 * i; j <= n; j += i) {
            numbers[j] = 1;
        }
    }
    
    return numbers.filter(e => e === 0).length - 2;
    
    /* 참고할 만한 코드
    - set 활용해서 풀이
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
    
    - 일련의 정수들을 배열에 넣으려면
    let arr = [...Array(5).keys()]; 
    -> [0, 1, 2, 3, 4]
    */
}