//fungsi checkAB(str) parameter string
//true jika ada a dan b DAN jarak 3 karakter lain min satu kali
//jika tidak ditemukan kembalikan false
function checkAB(str) {
    var a = "a"
    var b = "b"
    for (i = 0; i <= str.length - 1; i++) {
        if (str[i] === a && str[i + 4] === b) {
            return true
        } else if (str[i] === b && str[i + 4] === a) {
            return true
        }
    }
    return false
}
console.log(checkAB('lane borrowed'));
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false