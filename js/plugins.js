$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      responsive: {
        0 : {
            items : 1,
            nav : true,
            loop : true,
            navText : ['','']
        }
      }
    });

    $('#fullpage').fullpage({
      verticalCentered: false,
      onLeave: function(index, nextIndex, direction){
        var elem = $('.fixed-menu__item');
        var flag = elem.eq(nextIndex-1)
        flag.addClass('active');
        flag.siblings().removeClass('active');
      }
    });

    $(function () {
      $('.review__view').fancybox();
    
      $('.close__link').on('click', function (e) {
        e.preventDefault()
    
        $.fancybox.close();
      });
    
    });
});