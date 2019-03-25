function RemoveSpacialChar(string){
var letters = /[:;"'}{|!@#$%^&*()_+]/;
var f = 0 ;
var result = '';
    for(var i =0 ; i<string.length ; i++ ){
        if(string.charAt(i).match(letters)){
            f = 0;
        }
        else{
            f = 1;
            result += string.charAt(i) ;
        }
    }
    return result;
}
console.log(RemoveSpacialChar('hello_worl@d'));