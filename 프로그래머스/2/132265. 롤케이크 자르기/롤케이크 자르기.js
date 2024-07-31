function solution(topping) {
    let answer = 0;
    let arrTemp = [];
    let cake1 = {};
    let cake2 = new Set();
    let countOfCake1 = 0;
    
    for (let i = 0; i < topping.length; i++) {
        if (cake1[topping[i]]) cake1[topping[i]]++;
        else {
            cake1[topping[i]] = 1;
            countOfCake1++;
        }
    }
    //console.log("cake1: ", cake1);
    
    for (let i = 0; i < topping.length; i++) {
        cake2.add(topping[i]);
        if (cake1[topping[i]]) {
            if (cake1[topping[i]] > 1) cake1[topping[i]]--;
            else countOfCake1--;
        }
        
        if (countOfCake1 === cake2.size) answer++;
    
    }
        /*
        arrTemp.push(topping.pop());
        //console.log(arrTemp, topping);
        if (new Set(arrTemp).size === new Set(topping).size) answer++;
        */
        /*
        piece1.clear();
        piece2.clear();
        topping.slice(0, i).forEach((e) => piece1.add(e));
        topping.slice(i).forEach((e) => piece2.add(e));
        
        if (piece1.size === piece2.size) answer++;
       
    } */
    
    return answer;
}