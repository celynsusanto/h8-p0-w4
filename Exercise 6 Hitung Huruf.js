//Fungsi hitungHuruf(kalimat), parameternya string
//Returnnya adalah kata yang punya perulangan huruf paling banyak
//Jika kalimat tidak memiliki kata yang memiliki huruf berulang return -1

//1.Masuk kedalam fungsi
//2.Buat variable 'hasil' dengan string kosong
//3.Split 'kata' per kata dan masukkan kedalam 'kataSplit'
//4.Lakukan perulangan pertama pada tiap string yang sudah dipisah
//5.Lakukan perulangan pada setiap huruf didalam string tersebut
//6.Masukkan kondisi didalam perulangan tersebut Jika terdapat lebih dari sama dengan dua huruf yang sama didalam satu kata
//  6.a.Masukkan kata tersebut kedalam 'hasil'
function hitungHuruf(kata) {
    var hasil = []
    var kataSplit = kata.split(" ")
    console.log(kataSplit)


    // for(var i=0; i<=kataSplit.length-1; i++){
    //     console.log(kataSplit[i])
    // }
    // for(var j=0; j<=kataSplit[i].length-1; j++){
    //         console.log(kataSplit[i][j])
    //     }

    // for(var j=0; j<=kataSplit[i].length-1; j++){

    //         for(var k=1; k<kataSplit[i].length; k++){
    //             if(kataSplit[i][j]===kataSplit[i][k]){
    //                 hasil.push(kataSplit[i][k])
    //             }
    //         }

    // }



}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
//   console.log(hitungHuruf('I am a passionate developer')); // passionate
//   console.log(hitungHuruf('aku adalah anak gembala')); // adalah
//   console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
//   console.log(hitungHuruf('mengayuh perahu di danau')); // danau