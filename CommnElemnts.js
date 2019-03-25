function find_comnelem(farry , sarry){
var result = [];
 farry.forEach(function (elem1){
    sarry.forEach(function (elem2){
        if(elem1 === elem2){
            result.push(elem1);
        }
    });
 });
 return result;
}
console.log(find_comnelem([3,4,5],[6,5,4]));
