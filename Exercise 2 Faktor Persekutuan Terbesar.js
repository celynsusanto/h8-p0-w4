//Faktor Persekutuan Terbesar
//function fpb(angka1, angka2), parameterny angka
//Return nya nila FPB
//FPB dr dua bil merupakan bil bulat pos terbesar yg dpt membagi habis kedua bil tsb

//1.Masuk kedalam fungsi fpb(angka1, angka2)
//2.Buat variable 'arrayGabung' untuk menampung gabungan faktor 'angka1' dan 'angka2'
//3.Lakukan perulangan pada 'angka1' untuk menemukan faktor dari 'angka1'
//  3.a.Masukkan variable 'i' dengan nilai 0
//  3.b.Masukkan 'angka1' sebagai batas/limit perulangan
//  3.c.Tambah nilai 'i' setiap selesai mengulang
//  3.d.Masukkan kondisi kedalam perulangan dimana Jika 'angka1' modulus 'i' sama dengan 0
//      3.d.1.Masukkan nilai 'i' kedalam 'arrayGabung'
//4.Lakukan perulangan pada 'angka2' untuk menemukan faktor dari 'angka2'
//  4.a.Masukkan variable 'j' dengan nilai 0
//  4.b.Masukkan 'angka2' sebagai batas/limit perulangan
//  4.c.Tambah nilai 'j' setiap selesai mengulang
//  4.d.Masukkan kondisi kedalam perulangan dimana Jika 'angka2' modulus 'j' sama dengan 0
//      4.d.1.Masukkan nilai 'j' kedalam 'arrayGabung'
//5.Urutkan 'arrayGabung' dari angka terkecil ke angka terbesar dan masukkan kedalam variable baru 'arrayGabungSort'
//6.Buat variable 'fpb' dengan value angka pertama dari 'arrayGabungSort'
//7.Lakukan perulangan dengan variable 'i' dengan nilai 2
//  7.a.Tentukan panjang dari 'arrayGabungSort' sebagai limit
//  7.b.Tambah nilai 'i' ditiap perulangan
//  7.c.Buat variable 'banding1' dengan nilai 'arrayGabungSort[i]'
//  7.d.Buat variable 'banding2' dengan nilai 'arrayGabungSort[i+1]'
//  7.e.Buat kondisi Jika 'banding1' sama dengan 'banding2' 
//      7.e.1.Buat variable 'sama' dengan nilai 'banding2'
//      7.e..2.Buat kondisi jika 'sama' lebih bisar dari 'fpb' maka nilai 'fpb' berubah menjadi nilai 'sama'
//  7.d.Jika tidak memenuhi kondisi diatas, maka lakukan perulangan kembali
//8.Kembalikan nila 'fpb'
//9.Selesai

function fpb(angka1, angka2) {
    var arrayGabung = []

    for (var i = 0; i <= angka1; i++) {
        if (angka1 % i === 0) {
            arrayGabung.push(i)
        }
    }
    for (var j = 0; j <= angka2; j++) {
        if (angka2 % j === 0) {
            arrayGabung.push(j)
        }
    }
    var arrayGabungSort = arrayGabung.sort(function (a, b) { return a - b })
    var fpb = arrayGabungSort[0]
    for (i = 2; i <= arrayGabungSort.length; i++) {
        var banding1 = arrayGabungSort[i]
        var banding2 = arrayGabungSort[i + 1]
        if (banding1 === banding2) {
            var sama = banding2
            if (sama > fpb) {
                fpb = sama
            }
        }
    }
    return fpb

}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1