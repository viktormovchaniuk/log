import 'slick-carousel';
import 'magnific-popup';


$('.open-popup-link').magnificPopup({
  type:'inline',
  closeBtnInside: false,
  removalDelay: 300,
  mainClass: 'mfp-fade',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

$('.menu-btn .icon-menu').on('click', function() {
  $('.main-nav').toggleClass('active');
});

$('.btn-next').click(function() {
  $('html, body').animate({
    scrollTop: $('#about').offset().top
  }, 500);
});


function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}

$('.slider-slides').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $('.slider-count-current').text( pad(i) );
  $('.slider-count-all').text('/' + pad(slick.slideCount));
});

$('.slider-slides').slick({
  mobileFirst: true,
  slidesToShow: 1,
  infinite: true,
  dots: true,
  appendDots: '.slider-dots',
  nextArrow: '.slider-next',
  prevArrow: '.slider-prev',
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
  ]
});


$('.services-slider-slides').slick({
  mobileFirst: true,
  slidesToShow: 1,
  infinite: false,
  nextArrow: '.services-slider-next',
  prevArrow: '.services-slider-prev',
});

$('.main-header-slider').slick({
  mobileFirst: true,
  slidesToShow: 1,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000
});


if ($(window).width() >= 1200 ) {
  var slideList = $('.services-list-item');
  slideList.eq(0).addClass('services-slider-slides_active');

  $('.services-list li a[data-slide]').on('click', function(e) {
    e.preventDefault();
    slideList.removeClass('services-slider-slides_active');
    var currentSlide = $(this).data('slide');
    $(this).parent().addClass('services-slider-slides_active');
    $('.services-slider-slides').slick('slickGoTo', currentSlide);
  });

  $('.services-slider-slides').on('afterChange', function(event, slick, currentSlide) {   

    slideList.removeClass('services-slider-slides_active');
    $(slideList[currentSlide]).addClass('services-slider-slides_active');

  });
}





