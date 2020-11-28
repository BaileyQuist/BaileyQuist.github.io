$(document).ready(function() {

$('.js-menu').on('click', () => {
  $('.js-menu').toggleClass('active');
  $('.js-nav').toggleClass('open');
  $('.js-nav__list').toggleClass('show');
});
$('.row').slick({
  accessibilty: true,
  adaptiveHeight: true,
  centerPadding: '70px',
  slidesToShow: 3,
  arrows: true,
  cssEase: 'ease',
  dots: true,
  fade: false,
  infinite: true,
  respondTo: 'min',
  swipe: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        fade: true,

      }
    }
  ]
});
$('.row').picturehover({
  caption:'alt',
  target: 'img',
  fontColor: '#fff',
  textAlign: 'center',
  verticalMiddle: true,
  backgroundColor: 'rgba(0, 60, 210, .9)',
  height: '20%'
})


});