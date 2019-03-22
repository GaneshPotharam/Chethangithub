var flatten = function(arry, shallow,flt){
    if(!flt){ flt = []}
     
  if (shallow) {
    return flt.concat.apply(flt,arry);
    }
        
     for(var i=0; i<arry.length; i++){
          if(arry[i].constructor == Array){
              flatten(arry[i],shallow,flt);
          }else{
              flt.push(arry[i]);
          }
      }
      return flt;
  }
  
  console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
  
  