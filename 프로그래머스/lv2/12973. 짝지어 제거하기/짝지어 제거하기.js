function solution(s)
{
    if (s.length < 2) return 0;
    let stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
        if (stack[stack.length - 1] === s[i]) stack.pop();
        else stack.push(s[i]);
    }
    //console.log(stack);
    return stack.length > 0 ? 0 : 1;
    
    /* 이 방식은 시간초과가 나온다.
    if (s.length < 2) return 0;
    let first = s.substring(0, Math.floor(s.length / 2));
    let second = s.substring(Math.floor(s.length / 2));
    
    first = removeRepeatChar(first);
    second = removeRepeatChar(second);    
    
    let third = first + second;
    third = removeRepeatChar(third);       
    return third.length > 0 ? 0 : 1;
    
    function removeRepeatChar(str) {
        let oldStrLength = 0;
        while (oldStrLength !== str.length) {
            oldStrLength = str.length;
            str = str.replace(/([a-z])\1+/g, "");
        }

        return str;
    }
    */
}

