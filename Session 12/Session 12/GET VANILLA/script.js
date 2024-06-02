// Synchronous and Asynchronous
// Multithreading
// console.log('Halo')
// console.log('Halo kedua')

// AJAX = Asynchronous Java Script and XML


// Get -> Ngambil data
// Post -> Input data

// const date = new Date();
// console.log(date)

document.addEventListener('DOMContentLoaded', function(){
  const ajax = new XMLHttpRequest();
  const buttonGetData = document.getElementById('btn-getData')
  const lists = document.getElementById('lists')
  const url = "products.json"
  const keyword = document.getElementById('keyword')
  const buttonSearch = document.getElementById('btn-search')
  let flag =0;
  // buttonGetData.addEventListener('click', function(){
  //   ajax.onload = function(){
  //     if(ajax.status === 200){
  //       // Jalanin function
  //       const datas = JSON.parse(ajax.responseText);
  //       lists.textContent = "";
  //       for(const data of datas.products){
  //         const list = document.createElement('li');
  //         list.textContent = data.title;
  //         lists.append(list);
  //       }
  //     }else{
  //       console.log(ajax.status + ' '+ajax.statusText)
  //     }
  //   }
    
  //   ajax.open("GET", url);
  //   ajax.send();
  //   // const datas = JSON.parse(ajax.responseText);
  //   // for( const data of datas.products){
  //   //   console.log(data.title);
  //   // }
  // })

  buttonSearch.addEventListener('click', ()=>{
    const keyword = document.getElementById('keyword')
    const value = keyword.value;
    
    ajax.onload = function(){
      if(value==""){
        console.error("Input tidak boleh kosong")
      }else{
        if(ajax.status ===200){
          lists.textContent ="";
          const datas = JSON.parse(ajax.responseText);
          const searchRegex = new RegExp(value,"i");
          flag =0;
          for(const data of datas.products){
            const title = data.title;
            if(searchRegex.test(title)){
              const list = document.createElement('li');
            list.textContent = data.title;
            lists.append(list);
            flag++;
            }
          }
          }
        else{
          console.log(ajax.status + ' '+ajax.statusText)
        }
    }
    if(flag==0){
      alert(`${value} tidak ada pada data json`)
    }
    }
    
    
    ajax.open("GET", url);
    ajax.send();
  })


})