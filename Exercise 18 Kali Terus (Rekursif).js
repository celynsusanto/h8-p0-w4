//function kaliTerusRekursif(angka)
//memproses angka yang lebih dari satu digit menjadi satu digit dgn perkalian
//jika masih lebih dari satu digit lakukan perkalian disetiap digit untuk pada akhirnya mendapat 1 digit

function kaliTerusRekursif(angka) {
    var angkArr=angka.toString()
  if (angka.toString().length === 1) {
    return Number(angka);
  } else {
      var kali=1
    for (var i = 0; i <= angkArr.length - 1; i++) {
      kali=kali*parseInt(angkArr[i])
    }
    return kaliTerusRekursif(kali);
  }
}

console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
