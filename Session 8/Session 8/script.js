// Integer
let x = 0.5;
// String
let Nama = "ALvin";
// Boolean
let bisaNyoblos = true;
// Date
let date = new Date();
// console.log(date.getHours())
// Array
let y = [1,2,3,4,5];
// let datas = ["Alvian", "Dhitan", "Alicia"]
// Object
let dataMahasiswa = {
  Nama : "Alvian",
  NIM : 27012123
};
// Array of Object
// let dataMahasiswaLC = [
//   {
//     Nama : "Alvian",
//     NIM : 27012123
//   },
//   {
//     Nama : "Dhitan",
//     NIM : 29801212
//   }
// ];

// Perbedaan var dan juga let
for(let i=0;i<4;i++){
  var j=0
}
for(let i=0;i<4;i++){
  let k=0
}
console.log(j)
var test1 = 10
let test2 = 100
test1 = 50
test2 = 30

// Perbedaan dengan const
const test3 = 3.1415
// test3 = 22
// console.log(test3)
// console.log(test1)
// console.log(test2)

// // Penjumlahan
// console.log(4+5)
// // Pengurangan
// console.log(4-5)
// // Pembagian
// console.log(4/5)
// // Perkalian
// console.log(4*5)
// // Pangkat
// console.log(4**5)
// // Modulo
// console.log(4%2)
// let a=5,b=10,c=a+b
// console.log("Hasil dari " + a + " + " + b + " = " +c)
// console.log(`Hasil dari ${a} + ${b} = ${c}`)
// printf("Hasil dari %d + %d = %d", a,b,c)

let age = '10'
let nama = "Alicia"

// console.log("Nama: " + nama + " Usia: " + age)
// console.log(`Nama: ${nama} Usia: ${age}`)

// == ini hanya membandingkan value saja, type data beda ga masalah
// === membandingkan value dan juga tipe data, kalau salah satu invalid maka false


// if(age == 10){
//   console.log("Umurnya 10")
// }else console.log("Tipe data berbeda")

// if(age === 10){
//   console.log("Umurnya 10")
// }else console.log("Tipe data berbeda")

// if(age<10){
//   console.log("Usia masih terlalu muda")
// }else if(age>=10){
//   console.log("Usia remaja")
// }else{
//   console.log("Data tidak valid")
// }

// if(age ==10 || nama =="Alvian"){
//   console.log("Kamu adalah mahasiswa BINUS")
// }else{
//   console.log("Kamu bukan mahasiswa BINUS")
// }


// Selama tidak null ataupun undefined, bakal return own value
let uang = null ?? 10000000000000
let uang2 = 100 ?? "Uang tidak ada"
console.log(uang)
console.log(uang2)

let usia = 18
let punyaKTP = 1

if(usia>=18){
  if(punyaKTP){
    console.log("Sudah boleh mengemudi")
  }else{
    console.log("Belum boleh mengemudi")
  }
}else{
  console.log("MAsih belum cukup umur")
}
// Ternary Operators
// const validasi = usia>= 18 ? "Sudah boleh mengemudi" : "Masih belum cukup umur"
// console.log(validasi)

// switch(usia){
//   case 17:
//     console.log("Masih belum cukup umur")
//     break
//   case 0:
//     break
//   default:
//     console.log("Invalid")
//   break;
// }
let loop = 5
// while cek dulu baru lakuin
// while(loop<5){
//   console.log(loop)
//   loop++
// }
// do-while lakuin dulu baru cek
let loop2 =5
// do{
//   console.log(loop2)
//   loop2++
// }while(loop2<5)


// for(let i=0;i<10;i++){
//   console.log(i)
// }
// Kalau misal ada data di dalam data
let dataMahasiswaLC = [
  {
    Nama : "Alvian",
    NIM : 27012123
  },
  {
    Nama : "Dhitan",
    NIM : 29801212
  }
];
// for(let key in dataMahasiswaLC){
//   console.log(key,dataMahasiswaLC[key])
// }
// Data bersifat absolut, tidak ada isinya lagi
// let datas = ["Alvian", "Dhitan", "Alicia"]
// for(let data of datas){
//   console.log(data)
// }

let name,nim
// for(a of dataMahasiswaLC){
//   nama = a.Nama
//   nim = a.NIM
//   console.log(`Nama mahasiswa: ${nama} , NIM Mahasiswa: ${nim}`)
// }


function add(a,b){
  console.log(a+b);
}

add(10,45)

const square = (z)=> z*z
console.log(square(5))

// function Klik(){
//   console.log("Aku di klik")
// }

const button = document.getElementById('btn')
button.addEventListener('click', ()=>{console.log("Aku di Klik")})