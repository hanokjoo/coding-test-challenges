function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    
    while(people.length > 1) {
        if (people[0] + people[people.length - 1] <= limit) {
            answer++;
            people.shift();
            people.pop();
        } else {
            answer++;
            people.pop();
        }
    }
    return people.length + answer;
    
    
    /* 테스트케이스는 모두 통과, 시간초과만 걸림
    let findIdx = -1, findPair = false;
    for (let i = 0; i < people.length; i++) {
        if (people[i] > 0) {
            for (let j = people.length - 1; j >= 0; j--) {
                if (people[j] > -1 && people[j] <= limit - people[i] && i !== j) {
                    answer++;
                    people[i] = -1;
                    people[j] = -1;
                    findPair = true;
                    break;
                }
            }
            if (!findPair) {
                answer++;
                people[i] = -1;
            } else findPare = false;
        }
    }
    
    return people.filter(e => e > -1).length + answer;
    */
    
    /* 참고할 만한 코드 
    - var로 선언한 i의 호이스팅으로 반복문 밖에서도 사용 가능.
    - let으로 바꾸고 cnt 하나 생성해도 좋을 듯.
    people.sort(function (a, b) {return a-b});
    for (var i = 0, j = people.length - 1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }    
    return people.length - i;
    */
}