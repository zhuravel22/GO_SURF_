$(function () {

  $('.heaer__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider__arrows slider__arrow-left"src="img/arrows-left.svg" alt="arrows-left">',
    nextArrow: '<img class="slider__arrows slider__arrow-right"src="img/arrows-right.svg" alt="arrows-right">',
    asNavFor: '.slider__dots'
  });
  $('.slider__dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.heaer__slider',
    centerMode: false,
    focusOnSelect: true
  });

  $('.slider__map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.surf__slider',
    prevArrow: false,
    nextArrow: false,
    focusOnSelect: true,
  })
  $('.surf__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.slider__map',
    prevArrow: '<img class="slider__arrows slider__arrow-left"src="img/arrows-left.svg" alt="arrows-left">',
    nextArrow: '<img class="slider__arrows slider__arrow-right"src="img/arrows-right.svg" alt="arrows-right">',
  })

});