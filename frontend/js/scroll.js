$(document).ready(function(){
    let scrollBtn = $('#scrollBtn');

    $(window).scroll(function () {
       if($(window).scrollTop() > 30){
        scrollBtn.fadeIn();
       } else {
        scrollBtn.fadeOut();
       }
    });

    scrollBtn.click(function(){
        $('html, body').animate({ scrollTop : 0 }, 100, 'linear');
        return false;
    });

});