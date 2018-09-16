//Fungsi hitungHuruf(kalimat), parameternya string
//Returnnya adalah kata yang punya perulangan huruf paling banyak
//Jika kalimat tidak memiliki kata yang memiliki huruf berulang return -1


function hitungHuruf(kata) {
    var kataSplit = kata.split(" ")
    // console.log(kataSplit)

    for (i = 0; i <= kataSplit.length - 1; i++) {
        for (j = 0; j < kataSplit[i].length; j++) {
            if (kataSplit[i].lastIndexOf(kataSplit[i][j]) !== kataSplit[i].indexOf(kataSplit[i][j])) {
                return kataSplit[i]
            }
        }
    }
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau