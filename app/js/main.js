$(function () {
  $('.header__search-catalog ').on('click', function (event) {
    event.preventDefault();
    $('.header__search-menu').toggleClass('header__search-menu--active')
    $('.header__search-catalog').toggleClass('header__search-catalog--active')
  })

  $('.cart__menu-close').on('click', function () {
    $('.cart__menu').toggleClass('cart__menu--active')
    $('body').removeClass('body--lock')
  })
  
  $('.header__user-cart').on('click', function () {
    $('.cart__menu').toggleClass('cart__menu--active');
    $('body').toggleClass('body--lock')
  })


  $('.slider').slick({
    adaptiveHeight: true,
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
  })

  var mixer = mixitup('.filter__product');
})