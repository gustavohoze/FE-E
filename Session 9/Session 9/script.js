// console.log("Ini contoh cara print")
// console.log("Ini juga contoh cara print")
// console.log('Ini juga contoh cara print')
// console.log(`Ini juga contoh cara print`)

// window.alert("Selamat datang");
// const input = window.prompt("Berapa umurmu")
// console.log(input)
// window.confirm("Are you sure")

// const btn = document.getElementById('btn')
const paragraf = document.getElementById('paragraf')
paragraf.addEventListener('mouseover', ()=>{
  paragraf.innerHTML = 'Bukan lorem ipsum lagi'
})
paragraf.addEventListener('mouseleave', ()=>{
  paragraf.innerHTML = 'Lorem ipsum dolor sit amet.'
})



// console.log(paragraf[1])
// btn.addEventListener('click', ()=>{
//   btn.style.backgroundColor = 'red'
// })

// const btn1 = document.getElementById('btn1')
// btn1.addEventListener('click', ()=>{
//   window.alert("Halo")
//   window.alert("dor")
//   const a = window.prompt("Halo")
//   let isTrue = window.confirm("Are you sure?")
// })

// const h1s = document.querySelectorAll('#kedua')
// console.log(h1s)

// const h1pertama = document.getElementsByClassName('Header')
// console.log(h1pertama[0])

// const h1kedua = document.getElementById('kedua')
// console.log(h1kedua)

// console.log(h1kedua.textContent)
// h1kedua.innerHTML = "<i>Ini setelah diubah</i>"

const button = document.getElementById('btn')
const input = document.getElementById('text-inputted')

function add(){
  console.log('a')
}

// function blur(){
//   button.style.backgroundColor = "blue"
// }
// function focus()
// {
//   button.style.backgroundColor = "red"
// }
// button.addEventListener('click', ()=>{
//   console.log('a')
// })



// button.addEventListener('click', ()=>{
//   const value = input.value
//   if(value.length<5){
//     window.alert("Input tidak valid")
//     return
//   }
//   if(!value.includes("@")){
//     window.alert("Harus mempunyai '@")
//     return
//   }if(!value.startsWith('a')){
//     window.alert("Harus dimulai dari 'a'")
//     return
//   }
//   console.log(input.value)
// })

// function change(){
//   window.alert("Terjadi perubahan")
// }