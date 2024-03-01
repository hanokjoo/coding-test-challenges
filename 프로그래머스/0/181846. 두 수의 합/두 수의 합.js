function solution(a, b) {
    const max = Number.MAX_SAFE_INTEGER;
    const maxLength = (max + "").length;
    
    if (a.length >= maxLength || b >= maxLength) {
        return (BigInt(a) + BigInt(b)).toString();
    } else {
        return (Number(a) + Number(b)).toString();
    }
}