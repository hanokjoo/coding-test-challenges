function solution(q, r, code) {
    return [...code].reduce((a, c, i) => {
        if (i % q === r) a.push(c);
        return a;
    }, []).join("");
}