
function arrsum(arr){
    for(var i=2 ; i<arr.length;i++){
       temp = arr[i-2] + arr[i-1];
       if(temp == arr[i]){
        return true;
       }
       else
       {
           return false;
       }
    }
    }
    var isum = arrsum([3,5,8]);
    console.log(isum);
    