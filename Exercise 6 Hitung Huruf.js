//Fungsi hitungHuruf(kalimat), parameternya string
//Returnnya adalah kata yang punya perulangan huruf paling banyak
//Jika kalimat tidak memiliki kata yang memiliki huruf berulang return -1
//belum sesuai kriteria berikut `return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t`

function hitungPerulangan(kata) {
    var obj = {};
    var jumlah = 0;
    for (i = 0; i <= kata.length - 1; i++) {
      if (obj[kata[i]] == undefined) {
        obj[kata[i]] = 1;
      } else {
        obj[kata[i]] = obj[kata[i]] + 1;
      }
    }
  
    for (i = 0; i <= kata.length - 1; i++) {
      if (obj[kata[i]] > 1) {
        jumlah = jumlah + 1;
      }
    }
    if (jumlah === 0) {
      jumlah = 1;
    }
  
    return jumlah;
  }
  
  //  console.log(hitungPerulangan('passionate')) // 4
  //  console.log(hitungPerulangan('Today')) // 1
  //  console.log(hitungPerulangan('developer')) // 3

function hitungHuruf(kata) {
  var kataSplit = kata.split(" ");
  var counter = [];
  // console.log(kataSplit)
  for (k = 0; k <= kataSplit.length - 1; k++) {
    counter[k] = hitungPerulangan(kataSplit[k]);
  }
  var max = 1;
  var kata = "";
  for (m = 0; m <= counter.length - 1; m++) {
    if (max < counter[m]) {
      max = counter[m];
      kata = kataSplit[m];
    }
  }

  return kata;
}

// TEST CASES
console.log(hitungHuruf("Today, is the greatest day ever")); // greatest
console.log(hitungHuruf("I am a passionate developer")); // passionate
console.log(hitungHuruf("aku adalah anak gembala")); // adalah
console.log(hitungHuruf("rajin pangkal kaya")); // pangkal
console.log(hitungHuruf("mengayuh perahu di danau")); // danau
/**
 * [1,1,1,4,3]
 *
 * step 1
 * var split = ['today,', 'is', 'the', 'greatest', 'day', 'ever']
 *
 * step2
 * loop split ->i
 *  loop split[i]
 *      loop split[k]
 */


