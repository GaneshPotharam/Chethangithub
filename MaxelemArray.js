
    function max(input) {
     if (toString.call(input) !== "[object Array]")  
       return false;
  return Math.max.apply(null, input);
	}

console.log(max([12,34,56,1]));
