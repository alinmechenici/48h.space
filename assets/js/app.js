var counter = 0;
$('.close').on('click',function(){
  counter++;
  
$(this).parent('.product').hasClass('imoutc') ? $(this).parent('.product').removeClass('imoutc'):'';
$(this).parent('.product').addClass('imout');
  $('.closed-app-counter').html(counter);
  $('.closed-app-counter').addClass('closed-app-counter_is-adding');
setTimeout(clearBounce, 1005);
});





function clearBounce(){
  if($('.closed-app-counter').hasClass('closed-app-counter_is-adding'))
  {
    $('.closed-app-counter').removeClass('closed-app-counter_is-adding');
  }
}


$('.restore').on('click',function(){
  counter=0;$('.closed-app-counter').html(counter);
   $('.product').each(function(){
     $(this).hasClass('imout')?$(this).removeClass('imout').addClass('imoutc'):'';
   });
});