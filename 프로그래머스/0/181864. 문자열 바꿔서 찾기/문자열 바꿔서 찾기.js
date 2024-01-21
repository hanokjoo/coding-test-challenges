function solution(myString, pat) {
    return ([...myString].reduce((acc, cur) => {
        (cur === "A") ? acc.push("B"): acc.push("A");
        return acc;
    }, []).join("").indexOf(pat) > -1) ? 1 : 0;
}