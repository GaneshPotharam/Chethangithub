function arrdup(arr){
    var k=0 , arrduplicat = [];
    for(var i = 0 ; i<arr.length ;i++){
        for(var j =i+1 ; j <arr.length ; j++){
            if(arr[i] == arr[j]){
                arrduplicat.push(arr[j]);
                k++;
            }
        }
    }
    return arrduplicat;
 }
 var arry = arrdup([3,4,4,7,3,1]);
 console.log(arry);
 