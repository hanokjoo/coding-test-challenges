function solution(n)
{
    return Array.from(n.toString()).reduce((acc, cur) => acc + Number(cur), 0);
}