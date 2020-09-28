$(function() {
    var offset = $('#globalNavi').offset();
    $(window).scroll(function () {
        if ($(window).scrollTop() > offset.top) {
            $('#globalNavi').addClass('fixed');
        } else {
            $('#globalNavi').removeClass('fixed');
        }
    });
});

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('active');
            }
        });
    });
});


$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalNavi-Sp').addClass('active');
        } else {
            $('.globalNavi-Sp').removeClass('active');
        }
    });
});



$(window).scroll(function () {
  var now = $(window).scrollTop();
  if (now > 300) {
    $('.pagetop').fadeIn("slow");
  } else {
    $('.pagetop').fadeOut('slow');
  }
});
