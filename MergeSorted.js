function mergedArray(firstArray,secondArray){
   for(var i=0;i<secondArray.length;i++){
       firstArray.push(secondArray[i]);
   }
for(i=0;i<firstArray.length;i++)
   {
      for(j=i+1;j<firstArray.length;j++)
      {
                 
         if(firstArray[i]>firstArray[j])
          {
         
              temp=firstArray[i];
              firstArray[i]=firstArray[j];
              firstArray[j]=temp;
              
           }
             
      }
  
  }
  return firstArray;
}
var merge = mergedArray([4,2,3,5,1],[6,7,9,8]);

console.log(merge);
