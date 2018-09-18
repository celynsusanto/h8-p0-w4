//Angka Prima
//function angkaPrima(angka), parameter angka
//return true jika bil.prima
//false jika tidak


//1. Masuk kedalam fungsi 'agkaPrima' dengan parameter angka
//2. Buat variable 'arrFaktor' untuk menampung hasil faktor dari angka
//3. Lakukan perulangan terhadap'i' dimana nilainya adalah 1, dan dengan batas 'angka' tersebut (karena faktor tidak akan melebihi 'angka' itu sendiri)
//4. Masukkan kondisi kedalam perulangan dimana Jika 'angka' modulus 'i' sama dengan 0, maka masukkan 'i' kedalam 'arrFaktor'
//5. Perulangan selesai
//6. Buat kondisi baru dimana Jika panjang dari 'arrFaktor' lebih dari 2 maka 'angka' tersebut bukan bilangan prima dan tampilkan 'prima' dengan nilai false
//7. Jika tidak memenuhi kondisi diatas maka 'angka' merupakan bilangan prima dan tampilkan 'prima' dengan nilai true
//8. Kondisi selesai
//9. Kembalikan hasil 'prima'
//10.Selesai


function angkaPrima(angka) {
    var arrFaktor = []
    for (var i = 1; i <= angka; i++) {
        if (angka % i == 0) {
            arrFaktor.push(i)
        }
    }
    if (arrFaktor.length > 2 || arrFaktor.length<2) {
        var prima = false
    } else {
        prima = true
    }
    return prima
}

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false


