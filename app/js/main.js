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

  $('.box__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.surf__slider',
    prevArrow: false,
    nextArrow: false,
    fade: true,
  })
  $('.surf__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.box__slider',
    prevArrow: '<img class="slider__arrows slider__arrow-left"src="img/arrows-left.svg" alt="arrows-left">',
    nextArrow: '<img class="slider__arrows slider__arrow-right"src="img/arrows-right.svg" alt="arrows-right">',
  })

});