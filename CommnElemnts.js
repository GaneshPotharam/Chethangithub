var frstArray = new Array(2,3,5) ,
 scndArray = new Array (3,4,5),
 result = new Array();
k=0;
  console.log(frstArray);
   console.log(scndArray);
   for(var i = 0 ; i<frstArray.length ; i++){
      
       for(j =0 ; j<scndArray.length;j++){
       if(frstArray[i] === scndArray[j]){ 
       result[k] = scndArray[j];
          k++;
       }
     }
   }
   console.log(result);