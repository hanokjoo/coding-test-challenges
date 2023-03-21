function solution(emergency) {
    let origin = Array.from(emergency);
    let sorted = emergency.sort((a, b) => b - a);
    return origin.map((e) => e = sorted.indexOf(e) + 1);
    
    /* 참고할 만한 코드 - slice()로 복사
    let sorted = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>sorted.indexOf(v)+1);
    
    부가설명:
    1차원 배열을 slice()로 복사하면 깊은 복사로 보이나, 
    원시값을 저장한 1차원 배열일 뿐이다. 
    원시값은 기본적으로 깊은 복사가 된다. 
    2차원 배열에 slice()를 사용하면 얕은 복사를 수행한다.
    */
}