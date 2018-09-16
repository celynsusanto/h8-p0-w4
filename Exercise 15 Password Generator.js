/*
function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator
passwordGenerator requirements:
1. Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

2. Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

3. Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

4. Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals(str) {
    //ganti huruf vocalnya
    var vocal = 'aiueo'
    //buat kamus utk patokan
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var strBaru = ""
    var stop = false
    //looping di str
    for (i = 0; i <= str.length - 1; i++) {
        for (j = 0; j <= vocal.length - 1; j++) {
            if (vocal[j] === str[i] || vocal[j].toUpperCase() === str[i]) {
                for (k = 0; k <= kamus.length - 1; k++) {
                    if (kamus[k] === str[i] || kamus[k].toUpperCase() === str[i]) {
                        strBaru = strBaru + kamus[k + 1]
                        stop = true
                    }
                }
            }
        }
        if (stop === false) {
            strBaru = strBaru + str[i]
        }
        stop = false
    }
    return strBaru
}

function reverseWord(str) {
    var strBalik = ""
    for (i = str.length - 1; i >= 0; i--) {
        strBalik = strBalik + str[i]
    }
    return strBalik

}

function setLowerUpperCase(str) {
    var strTukar = ""
    for (i = 0; i <= str.length - 1; i++) {
        if (str[i] === str[i].toUpperCase()) {
            strTukar = strTukar + str[i].toLowerCase()
        } else {
            strTukar = strTukar + str[i].toUpperCase()
        }
    }
    return strTukar

}

function removeSpaces(str) {
    var strNoSpaces = str.split(' ').join('')
    return strNoSpaces

}

function passwordGenerator(name) {
    var strVocals = changeVocals(name);
    var strReverse = reverseWord(strVocals);
    var strSwitch = setLowerUpperCase(strReverse);
    var strRemove = removeSpaces(strSwitch);
    if(name.length<5){
        strRemove='Minimal karakter yang diinputkan adalah 5 karakter'
    }

    return strRemove

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'