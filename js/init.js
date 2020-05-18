(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
    $(document).ready(function(){
      $('.modal').modal();
    });
   

  }); // end of document ready
})(jQuery); // end of jQuery name space
(function ($) {
  var $window = $(window);
  $(window).resize(execute);

  $window.on('scroll', execute);
  function execute(){
    var position = $window.scrollTop();//show scrolling position

    try {
      if (position >= ($('.item1').offset().top - 800)) {
        if ($(window).width() > 992) {
          $('.item1').animate({
            opacity: '0.8',
            left: '100'
          }, 1000);
        } else {
          $('.item1').animate({
            opacity: '0.8',
            left: '0'
          }, 1000);
        }


      } else {
        $('.item1').stop(true).animate({
          opacity: '0',
          left: '50'
        }, 100);

      }
    }
    catch (err) {

    }
    try {
      if (position >= ($('.item2').offset().top - 800)) {
        if ($(window).width() > 992) {
          $('.item2').animate({
            opacity: '0.8',
            right: '100'
          }, 1000);
        } else {
          $('.item2').animate({
            opacity: '0.8',
            right: '0'
          }, 1000);
        }
      } else {
        $('.item2').stop(true).animate({
          opacity: '0',
          right: '50'
        }, 100);

      }

    }
    catch (err) {

    }
    try {
      if (position >= ($('.item3').offset().top - 800)) {
        if ($(window).width() > 992) {
          $('.item3').animate({
            opacity: '0.8',
            left: '100'
          }, 1000);
        } else {
          $('.item3').animate({
            opacity: '0.8',
            left: '0'
          }, 1000);
        }
  
      } else {
        $('.item3').stop(true).animate({
          opacity: '0',
          left: '50'
        }, 100);
  
      }
    }
    catch (err) {

    }



    

    if (position >= ($('.boxes').offset().top - 800)) {
      $('.boxes').animate({
        opacity: '1',
        top: '0'
      }, 1000);

    } else {
      $('.boxes').stop(true).animate({
        opacity: '0',
        top: '50'
      }, 100);

    }
  }


  // $(document).on('click', '.scroll_to', function(e){//when 'scroll_to' class is clicked
  //   		e.preventDefault();
  //    	$('html, body').animate({
  //        	scrollTop: $( $.attr(this, 'href') ).offset().top
  //    	}, 500);
  // });

  $(document).on('click', '.scroll_to', function (e) {//when 'scroll_to' class is clicked
    e.preventDefault();
    let $linkClicked = $(this);
    console.log($linkClicked);
    $('html, body').animate({
      scrollTop: $($linkClicked.attr('href')).offset().top
    }, 500);
  });


})(jQuery);
