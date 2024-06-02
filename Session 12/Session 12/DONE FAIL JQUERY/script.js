$(document).ready(function(){

  const url = "products.json"
  const lists = $('#lists');
  let productData;
 $('#btn-getData').click(function(){
  $.get(url,"json")
  .done(function(data){
    productData = data;
    lists.empty();
    $.each(data.products, function(index,product){
      const listProduct = $("<li>").text(product.title)
      lists.append(listProduct)
    })
})
  .fail(function(jqXHR,textStatus, errorThrown){
    lists.empty();
    lists.append($("<li>").text(`Error:${textStatus} - ${errorThrown}`))

  })



 })
})