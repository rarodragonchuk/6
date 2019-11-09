$(function(){
  let burger = $('.burger');
  let burgerClose = $('.burger_close');
  let menu = $('.menu');



   burger.on('click',function(e){
     e.preventDefault();
      menu.toggleClass('active');
     burger.toggleClass('burger_close');
  });
  $('.burger').on('click',function(){
    $('html,body').toggleClass('scroll-off');
  });
});
