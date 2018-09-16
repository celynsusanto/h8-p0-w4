/*
function totalDigitRekursif(angka)
return nilai dr total digit tsb dr dpn ke blkg
*/
function totalDigitRekursif(angka){
    var index=0
    var total=""
    var angkaStr=''
    angkaStr=angkaStr+angka
    if(index>=angkaStr.length-1){
        return angka
    }else{
        return totalDigitRekursif(angkaStr[index]+angkaStr[index+1])
    }
}

console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5