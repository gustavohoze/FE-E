$(document).ready(function(){
  const box = $(".box");
  // $(".button").click(function(){
  //   $(this).css('background-color', 'red')
  // });
  $(".button").hover(function(){
    $(this).css('font-size', '100px')
  });
  $(".input-text").focus(function(){
    $(this).css('color', 'green')
  });

  // $('.btn-box').click(function(){
  //   // $('.box').animate({
  //   //   width:'500px',
  //   //   height:'500px'
  //   // },2000)
  //     $('.box').css('width', '500px');
  //     $('.box').css('height', '500px');

  // });
  // $('.btn-box2').click(function(){
  //   $('.box').animate({
  //     width:'100px',
  //     height:'100px'
  //   },2000)
  // });

// $('.box').fadeOut('slow');
// $('.box').fadeIn('slow');

// function fadeLoop(){
//   $('.box').fadeIn('fast').fadeOut(1000, fadeLoop)
// }
// fadeLoop();



// $('.box').delay(5000).fadeTo(1000,0.1)
// $('.button').click(function(){
//   $('.box').fadeToggle(1000)
// });
// $('.btn-box3').click(function(){
//   $('.box').hide();
// });
// $('.btn-box4').click(function(){
//   $('.box').show();
// });
// $('.btn-box5').click(function(){
//   $('.box').toggle(1000);
// });
// $('.btn-box6').click(function(){
//   $('.box').slideUp(2000);
// });
// $('.btn-box7').click(function(){
//   $('.box').slideDown(1000);
// });
// $('.btn-box8').click(function(){
//   $('.box').slideToggle(1000);
// });
$('.btn-box9').click(function(){
  $('.box').addClass('green');
});
$('.btn-box10').click(function(){
  $('.box').removeClass('green');
});


// $('#parent').children().css('color', 'red');
// $('#parent h1').siblings().css('color', 'green');
// $('#parent h1').next().css('color', 'green');
// $('#parent h1').prev().css('color', 'green');

// $(".input-text").blur(function(){
//     $(this).css('color', 'green')
//   });
// $(".input-text").focus(function(){
//     $(this).css('color', 'red')
//   });
// $(".input-text").change(function(){
//     window.alert("Terjadi perubahan")
//   });

// $('.input-text').keypress(function(){
//   console.log($(this).val())
// })

$('#form').submit(function(event){
event.preventDefault();
alert("Form berhasil di submit")

})



});
