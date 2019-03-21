function isPrime(number){  
    var i,m=0,temp=0;      
    m=number/2;      
    if(number==0||number==1){  
    return  number+ " is not prime number" ;      
    }
    else{  
        for(i=2;i<=m;i++){      
            if(number%i==0){      
            return number + " is not prime number" ;      
            temp=1;      
            break;      
            }      
        }      
        if(temp==0)  { 
         return number + " is prime number";
         }  
    }  
  }  
  var checknum = isPrime(5);
  console.log(checknum);