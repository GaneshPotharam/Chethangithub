function notRepeatedChar(string) {
    var arra1 = string.split('');
    var result = '';
    var ctr = 0;
   
    for (var i = 0; i < arra1.length; i++) {
      ctr = 0;
   
      for (var j = 0; j < arra1.length; j++) 
      {
        if (arra1[i] === arra1[j]) {
          ctr+= 1;
        }
      }
   
      if (ctr < 2) {
        result = arra1[i];
        break;
      }
    }
    return result;
  }
  var notrep = notRepeatedChar('ganesh');
  console.log(notrep);
  