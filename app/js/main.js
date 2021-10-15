$(function () {

  $('.header-catalog__btn').on('click', function (event) {
    event.preventDefault();
    $('.header-catalog__menu').toggleClass('header-catalog__menu--active')
    $('.header-catalog__btn').toggleClass('header-catalog__btn--active')
  })
  
  $('main').on('click', function (event) {
    $('.header-catalog__menu--active').removeClass('header-catalog__menu--active')
  });


  $('.cart__menu-close').on('click', function () {
    $('.cart__menu').toggleClass('cart__menu--active')
    $('body').removeClass('body--lock')
  })

  $('.header__user-cart').on('click', function () {
    $('.cart__menu').toggleClass('cart__menu--active');
    $('body').toggleClass('body--lock')
  })


  $('.discounts-slider__box').slick({
    adaptiveHeight: true,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img class="slider-arrow" src="images/icons/arrow-right.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img class="slider-arrow" src="images/icons/arrow-left.svg" alt=""></button>',
  })

  var mixer = mixitup('.product-items__inner');
  var sale = mixitup('.sale-card__inner')
})