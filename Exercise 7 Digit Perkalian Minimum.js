//fungsi digitPerkalianMinimum(angka)
//return  nya jumlah digit minimal dari angka yang merupakan faktor angka parameter tsb

function digitPerkalianMinimum(angka) {
    var faktor = []
    for (var i = 0; i <= angka; i++) {
        if (angka % i === 0) {
            faktor.push(i)
        }
    }
    var pFaktor = Math.floor(faktor.length / 2)
    var faktor1 = faktor.slice(0, pFaktor)
    var faktor2 = faktor.slice(pFaktor)
    var faktorBaru = []

    for (i = faktor2.length - 1; i >= 0; i--) {
        var faktor3 = ""
        for (j = 0; j <= faktor1.length - 1; j++) {

        }
        faktor2Baru[i].push(faktor1[j])
    }
    return faktor2Baru
}

console.log(digitPerkalianMinimum(24)); //2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2