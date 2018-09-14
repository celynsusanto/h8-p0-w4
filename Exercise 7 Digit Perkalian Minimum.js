//fungsi digitPerkalianMinimum(angka)
//return  nya jumlah digit minimal dari angka yang merupakan fakto angka parameter tsb

function digitPerkalianMinimum(angka){
    var faktor=[]
    for(var i=0; i<=angka; i++){
        if(angka%i===0){
            faktor.push(i)
        }
    }
    console.log(faktor)
    
}

console.log(digitPerkalianMinimum(24));
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2