var obj = {
  name :" Chethan",
  department :  "instructor",
  id : 007
}
var list = [];
    for(var i in obj){
        list.push(i);
    }
    console.log(list);