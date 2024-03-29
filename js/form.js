$(function(){
 let button = $('.button--pop-up');
 let popUp = $('.pop-up');
 let popUpClose = $('.pop-up__close');
 var popUpSubmit = $('.submit');

   button.on('click',function(e){
   e.preventDefault();
    popUp.addClass('pop-up__active');
    $('html,body').addClass('scroll-off');

    popUpClose.on('click',function(e){
      e.preventDefault();
       popUp.removeClass('pop-up__active');
       $('html,body').removeClass('scroll-off');
    });


    $("#phone").mask("+7(999) 99-99-999");


    $('form').each(function () {
        $(this).validate({
        // errorPlacement(error, element) {
        //   return true;
        // },
        focusInvalid: false,
        rules: {
          телефон: {
            required: true,
          },
          имя: {
            required: true,
            minlength: 3,
          },
          мейл: {
            required: true,
            email: true,
          },
        },
        messages: {
          имя: {
            required: 'Введите имя',
            minlength: 'Минимум 3 буквы',
          },
          телефон: {
            required: 'Нужен номер',
          },
          мейл: {
            required: 'Введите email',
            email: 'Введите email',
          }
        },
        submitHandler(form) {
        let th = $(form);

        $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: th.serialize(),
        // eslint-disable-next-line func-names
      }).done(() => {


        popUp.removeClass('pop-up__active');
        $('html,body').removeClass('scroll-off');
        console.log('Отправлено');

        th.trigger('reset');
      });

      return false;
    }
    });
    });


 });

})
