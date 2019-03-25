function isPalindromeString(string){
    var palindrome = '';
     this.string = string;
     for(var i=this.string.length-1;i>=0;i-- ){
        palindrome += this.string[i];// reversing string and adding it into palindrome variable
     }
        if(palindrome.toUpperCase() === string.toUpperCase()){//checking whether given parameter is equal to palindrome value
            return palindrome +" "+ true; //  true 
          }
          else{
            return palindrome +" "+ false; // false
          }
     }
    var reverse = isPalindromeString("maM");
    console.log(reverse);
     reverse = isPalindromeString("ABcDCbA");
     console.log(reverse);
