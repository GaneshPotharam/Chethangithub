

function patternNum(number){
var s = '*';
    var i =1 , j =1 ; 
    for( i ; i <=number ; i++ ){
        for(j = 1 ; j<=i; j++){
          console.log(s + " "); 
        }
      console.log("<br>");
    }
}
patternNum(5);   
