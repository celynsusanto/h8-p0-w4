//Mencari Modus
//function cariModus(arr), arr angka
//return modus dr arr tsb
//modus: angka yg paling sering muncul
//jika tidak ada modus, retun -1
//jika ada lebih dari 2 modus tampilkan modus yg paling pertama muncul(kiri ke kanan)
//jika hanya ada satu nilai yang sama return -1

function cariModus(arr) {
    var temp = []
    var index = 0
    var modus = -1
    var arrSort = arr.sort(function (a, b) { return a - b })
    for (i = 0; i < arrSort.length; i++) {
        if (temp.length === 0) {
            temp.push([arrSort[i]])
        } else if (arrSort[index] === arrSort[i]) {
            temp[index].push(arrSort[i])
        } else {
            temp.push([arrSort[i]])
            index = index + 1
        }
    }
    for (i = 0; i < temp.length; i++) {
        if (temp.length === 1) {
            modus = -1
        } else if (temp[i].length >= 2) {
            modus = temp[i][0]
        }

    }

    return modus
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1