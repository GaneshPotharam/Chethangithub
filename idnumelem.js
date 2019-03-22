var flatten = function(arry, shallow,flt){
 var letters = /[0-9]/;
    if(!flt){ flt = [];}
     
  if (shallow) {
    return flt.concat.apply(flt,arry);
    }
        
     for(var i=0; i<arry.length; i++){
          if(arry[i].constructor == Array){
              flatten(arry[i],shallow,flt);
          }else if(arry[i].constructor == Number){
              flt.push(arry[i]);             
            }
            else if(arry[i].match(letters)){
                flt.push(arry[i]);
            }
          }
          var ft = flt.join('');
    return ft;
    }  
  console.log(flatten([1,2,'3',2,5,['x','10'],'4']));