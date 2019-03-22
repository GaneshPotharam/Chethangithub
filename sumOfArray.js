
function  sumArray(Array){
    var i , sum = 0;
    for(i =0 ; i < Array.length; i++){
        sum += Array[i];
    }
    return sum;
}
var arry =  sumArray([6,2,3]);
console.log(arry);   
