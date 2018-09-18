/*
Makan terus 
customer makan sampai waktu habis
tiap proses makan(pesan/ambil), waktu berkurang 15 mins sampai waktu habis
masih bs pesan /ambil mkn selama waktu blm 0

function makanTerusRekursif(waktu)
fungsi akan memproses jika waktu masih ad
fungsi akan mereturn berapa kali customer pesan/ambil mkn dlm wktu yg diberikan
*/


function makanTerusRekursif(waktu) {
    // counter=0
    // while(waktu>0){
    //     waktu=waktu-15
    //     counter=counter+1
    // }
    // return counter
    var proses = 15
    var counter = 1
    if (waktu <= 0) {
        return 0
    } else {
        return counter+makanTerusRekursif(waktu-proses)
    }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
