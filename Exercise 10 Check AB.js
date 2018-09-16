//fungsi checkAB(str) parameter string
//true jika ada a dan b DAN jarak 3 karakter lain min satu kali
//jika tidak ditemukan kembalikan false
function checkAB(str) {
    var a = []
    var b = []


    for (i = 0; i <= str.length - 1; i++) {

        if (str[i] === "a") {
            a.push(i)
        }

    }
    for (i = 0; i < str.length - 1; i++) {

        if (str[i] === "b") {
            b.push(i)
        }
    } return a

    // if(Math.abs(a-b)>=3 && b!==0-1 && a!==-1){
    //     return true
    // }else{
    //     return false
    // }
}
console.log(checkAB('lane borrowed'));
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false