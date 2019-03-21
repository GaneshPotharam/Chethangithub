function genArray(index, length){
    var i =0 , arr =[] ;
    for( i ; i <length ; i++){
        arr.push(index);
        index++;
    }
    return arr;
 }
 var arry = genArray(5,3);
 console.log(arry);
 