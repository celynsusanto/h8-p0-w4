function checkAB(str){
    var a=str.indexOf("a")
    var b=str.indexOf("b")
    if(Math.abs(a-b)>=3 && b!==0 && a!==0){
        return true
    }else{
        return false
    }
}
console.log(checkAB('lane borrowed')); 
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false