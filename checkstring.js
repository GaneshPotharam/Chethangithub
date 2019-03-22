function isEmptyString(string){
    if(!string){
        return string + 'is empty';
    }
    else {
        return string + ' is not empty';
    }
}
console.log(isEmptyString(''));