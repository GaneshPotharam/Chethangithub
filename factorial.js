function factorialNum(number){
    var i =1 , fact =1;
    for(i ; i<=number; i++)
    {
        fact = fact * i;
    }
    return fact;
}
var factorial = factorialNum(10);
console.log(factorial);