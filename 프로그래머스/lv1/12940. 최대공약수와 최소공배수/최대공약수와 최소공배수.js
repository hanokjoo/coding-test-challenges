function solution(n, m) {
    let max= 0, a = 0, b = 0;
    let nm = [];
    if (n > m) {
        max = n;
        a = n;
        b = m;
    } else {
        max = m;
        a = m;
        b = n;
    }
    
    let temp = 0;
    while (b != 0) {
        temp = a % b;
        a = b;
        b = temp;
    }
    return [a, n * m / a];
    
    /** 유클리드 호제법 활용
    2개의 자연수 a, b(a > b)에 대해서 a를 b로 나눈 나머지가 r일 때, a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
    -> 나머지가 0이 될 때까지 나누면 그 수가 최대공약수.
    -> a * b / 최대공약수 = 최소공배수
    */
    
    /* 참고할 만한 코드 - for()문 활용
    var r;
    for (var ab = a * b; r = a % b; a = b, b = r) {}
    return [b, ab / b];
    */
}