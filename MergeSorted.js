function mergearrys(arr1 , arr2){
    for(let i in arr2){
        arr1.push(arr2[i]);
    }
    arr1.sort();
    return arr1;
}
var merge = mergearrys([2,5,4,6],[7,8,3]);
console.log(merge);

