function solution(myString, pat) {
    while (!myString.endsWith(pat)) {
        myString = myString.substring(0, myString.length - 1);
    }
    return myString;
}