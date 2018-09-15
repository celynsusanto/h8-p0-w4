//fungsi ubahHuruf(kata), parameterny string
//return kata baru dmn tiap huruf diganti dgn alphabet setelahny


//1.Buat variable 'kataBaru' dengan value string kosong 
//2.Buat variable 'kamus' bernilai alphabet dari a sampai z
//3.Lakukan perulangan pada 'kata'
//4.Masukkan perulangan kedua untuk 'kamus' didalam perulangan pertama
//5.Masukkan kondisi dimana jika nilai dari 'kamus' sama dengan nilai dari kata
//  5.a.Masukkan index nilai tersebut ditambah 1 kedalam 'kataBaru'
//6.Kembalikan nilai temp
//7.Selesai

function ubahHuruf(kata) {
    var kataBaru = ""
    var kamus = "abcdefghijklmnopqrstuvwxyz"
    for (i = 0; i < kata.length; i++) {
        for (j = 0; j < kamus.length; j++) {
            if (kamus[j] === kata[i]) {
                var hurufSetelah = kamus[j + 1]
                kataBaru = kataBaru + hurufSetelah
            }
        }
    }
    return kataBaru

}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

