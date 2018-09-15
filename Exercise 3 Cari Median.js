//Mencari Median
//function cariMedian(arr)
//return median dari deret angka didalam array
//median: nilai tengah dari deret bilangan tsb
//median dr deret berjumlah genap adalah nilai rata2 dari 2 nilai tengah

//1.Masuk kedalam fungsi cariMedian(arr)
//2.Buat variable 'median' dengan nilai 0
//3.Urutkan 'arr' dari angka terkecil sampai angka terbesar
//4.Buat kondisi dimana Jika panjang 'arr' modulus 2 tidak sama dengan 0 
//  4.a.Tampilkan nilai 'median' sama dengan 'arr' di index bagi 2 dan dibulatkan kebawah
//5.Buat kondisi kedua dimana Jika panjang 'arr' modulus 2 sama dengan 0
//  5.a.Buat variable 'nilaiAtas' dengan nilai 'arr' dengan index panjang 'arr' dibagi 2
//  5.b.Buat variable 'nilaiBawah' dengan nilai 'arr' dengan index panjang 'arr' dibagi 2 dan dikurangi 1
//  5.c.'median' sama dengan 'nilaiBawah' ditambah 'nilaiAtas' dibagi 2
//6.Kembalikan nilai 'median'
//7.Selesai

function cariMedian(arr) {
    var median = 0
    var arrSort = arr.sort(function (a, b) { return a - b })
    var panjangArr = arrSort.length
    if (arrSort.length % 2 !== 0) {
        median = arrSort[Math.floor(panjangArr / 2)]
    } else if (arrSort.length % 2 === 0) {
        var nilaiAtas = arrSort[panjangArr / 2]
        var nilaiBawah = arrSort[(panjangArr / 2) - 1]
        median = (nilaiBawah + nilaiAtas) / 2
    }
    return median

}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5