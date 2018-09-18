//Mencari Median
//function cariMedian(arr)
//return median dari deret angka didalam array
//median: nilai tengah dari deret bilangan tsb
//median dr deret berjumlah genap adalah nilai rata2 dari 2 nilai tengah

//1.Masuk kedalam fungsi cariMedian(arr)
//2.Buat variable 'median' dengan nilai 0
//3.Buat kondisi dimana Jika panjang 'arr' modulus 2 tidak sama dengan 0 
//  3.a.Tampilkan nilai 'median' sama dengan 'arr' di index bagi 2 dan dibulatkan kebawah
//4.Buat kondisi kedua dimana Jika panjang 'arr' modulus 2 sama dengan 0
//  4.a.Buat variable 'nilaiAtas' dengan nilai 'arr' dengan index panjang 'arr' dibagi 2
//  4.b.Buat variable 'nilaiBawah' dengan nilai 'arr' dengan index panjang 'arr' dibagi 2 dan dikurangi 1
//  4.c.'median' sama dengan 'nilaiBawah' ditambah 'nilaiAtas' dibagi 2
//5.Kembalikan nilai 'median'
//6.Selesai

function cariMedian(arr) {
    var median = 0
    var panjangArr = arr.length
    if (arr.length % 2 !== 0) {
        median = arr[Math.floor(panjangArr / 2)]
    } else if (arr.length % 2 === 0) {
        var nilaiAtas = arr[panjangArr / 2]
        var nilaiBawah = arr[(panjangArr / 2) - 1]
        median = (nilaiBawah + nilaiAtas) / 2
    }
    return median

}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5