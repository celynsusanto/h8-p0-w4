//fungsi changeMe(arr),
//  arr multi berisi value urut kiri kekanan(First Name, Gender, dan Birth Year)
//return object literal 
//  dgn properti firsName, lastName, gender, dan age(tahun skrg-tahun lahir)
//  jika tahun lahir tdk diisi atau tahun lahir lebih besar dibanding tahun skrg, maka age akan menampilkan "invalid birth year"
/*Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }*/

//1. Masuk kedalam fungsi
//2. Buat variable 'year' dengan nilai tahun sekarang
//3. Buat variable 'no' dengan nilai 0
//4. Buat perulangan dengan variable 'i' dengan nilai 0 dan batas panjang 'arr'
//  4.a. Tambah nilai 'i' dengan 1 pada tiap perulangan
//  4.b. Tampilkan 'no' dan nama yang terdapat pada 'arr'
//  4.c. Buat variable 'object' dengan nilai object kosong
//  4.d. Pada 'arr' 'i' di index ke 0 masukkan kedalam 'object' dengan keyname 'firstName' dan nilai dari 'arr' tersebut
//  4.e. Lanj


function changeMe(arr) {

    var year = 2018
    var no = 0

    for (i = 0; i <= arr.length - 1; i++) {
        console.log(no = i + 1 + "." + arr[i][0] + " " + arr[i][1] + ": ")
        var object = {}
        object['firstName'] = arr[i][0];
        object['lastName'] = arr[i][1];
        object['gender'] = arr[i][2];
        if (arr[i][3] === undefined || arr[i][3] > year) {
            object['age'] = 'invalid birth year'
        } else {
            object['age'] = year - arr[i][3]
        }
        console.log(object)
    }


}

// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
console.log(changeMe([])); // ""