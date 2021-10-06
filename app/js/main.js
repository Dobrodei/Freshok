$(function () {
  $('.header__search-catalog').on('click', function (event) {
    event.preventDefault();
    $('.header__search-menu').toggleClass('header__search-menu--active')
    $('.header__search-catalog').toggleClass('header__search-catalog--active')
  })

  $('.slider').slick({
    adaptiveHeight: true,
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
  })
})