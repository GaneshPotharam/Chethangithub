function decomprs(string){
 var letter = /[0-9]/;
    var i;
    var  n = 1;
    var d = "";
    for (i = 0; i < string.length; i++) {
        if ( string.charAt(i).match(letter)) {
            while (n < string.charAt(i) - '0') {
                d += string.charAt(i - 1);
                n++;
            }
            n = 0;
        } 
        else {
            d += string.charAt(i);
        }
    }

        return d ;
}
console.log(decomprs('a3b3'));