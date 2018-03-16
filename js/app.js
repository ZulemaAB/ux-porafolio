$(document).ready(function() {
  $('.menu-icon').on('click', function() {
    $('nav ul').toggleClass('showing');
  });
});

$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  };
});

var posicion = $("#skills").position().top;
	var done = false;

		$(window).scroll(function(){

		    if (done) {
		        return;
		    }

		    var scrollTop = $(window).scrollTop();

		    if( (scrollTop > posicion ) ){

		        $('.skillbar').each(function(){
			    $(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			    }, 2000);
			});

			done = true;
		    }

		});
    // inicializando WOW
    $(document).ready(function () {
    	 new WOW().init();
   });
