function reverseNum(n)
{
    n = n + "";
    return n.split("").reverse().join("");	
}
var reverse = reverseNum(14243);
console.log(reverse);
