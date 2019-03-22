function factorialNum(number){
    if(number == 0){
        return 1;
    }
    else{
    return  number * factorialNum(number-1);
}
}
var factorial = factorialNum(10);
console.log(factorial);
