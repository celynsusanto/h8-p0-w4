/*
function totalDigitRekursif(angka)
return nilai dr total digit tsb dr dpn ke blkg
*/
function totalDigitRekursif(angka) {
  var index = 0;
  var jumlah = 0;
  if (index===angka.toString().length-1) {
    jumlah = jumlah + parseInt(angka.toString()[index]);
    return jumlah;
  } else {
    jumlah = jumlah + parseInt(angka.toString()[index]);
    index++;
    return jumlah + totalDigitRekursif(angka.toString().length--);
  }
}

console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
