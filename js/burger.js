$(function(){
  let burger = $('.burger');
  let burgerClose = $('.burger_close');
  let menu = $('.menu');
  let menuItem = $('.menu__link');

   burger.on('click',function(e){
     e.preventDefault();
      menu.toggleClass('active');
     burger.toggleClass('burger_close');
  });

  $('.burger').on('click',function(){
    $('html,body').toggleClass('scroll-off');
  });

  menuItem.on('click',function(){
    menu.toggleClass('active');
   burger.toggleClass('burger_close');
   $('html,body').toggleClass('scroll-off');
   console.log('hi');
  });

});
