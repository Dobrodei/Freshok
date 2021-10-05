$(function () {
  $('.header__search-catalog').on('click', function (event) {
    event.preventDefault();
    $('.header__search-menu').toggleClass('head')
  })
})