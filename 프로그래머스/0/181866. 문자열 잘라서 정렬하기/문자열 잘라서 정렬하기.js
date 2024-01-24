function solution(myString) {
    /** filter에서 걸러주니까 굳이 필요없음
    if (myString.startsWith("x")) myString = myString.substring(1);
    if (myString.endsWith("x")) myString = myString.substring(0, myString.length - 1);
    */
    
    return myString.split("x").filter((e) => e !== "").sort();
}