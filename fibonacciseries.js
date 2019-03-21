function fibonacci(number){
    var i=0 , j=1, count =3 ,sum=0;
    console.log(i);
    console.log(j);
    for(count = 3 ; count<=number; count++){
        sum = i + j;
       console.log(sum);
        i = j;
        j = sum;
       
        }
        
}

console.log(fibonacci(100));