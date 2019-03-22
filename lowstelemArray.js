
    function min(input) {
     if (toString.call(input) !== "[object Array]")  
       return false;
  return Math.min.apply(null, input);
	}

console.log(min([12,34,56,1]));
 
