function removeElem(arry , element){
    arry.splice( arry.indexOf(element), 1 );
    return arry;
}
var remove = removeElem([2,4,3,5],5);
console.log(remove);
