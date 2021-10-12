$(function () {

  $('.header__search-catalog ').on('click', function (event) {
    event.preventDefault();
    $('.header__search-menu').toggleClass('header__search-menu--active')
    $('.header__search-catalog').toggleClass('header__search-catalog--active')
  })

  $(document).on('click', function (e) { // событие клика по веб-документу
    var div = $(".header__search-menu--active"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      &&
      div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.css('display: none'); // скрываем его
    }
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
    nextArrow: '<button type="button" class="slick-next"><img class="slider-arrow" src="images/icons/arrow-right.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img class="slider-arrow" src="images/icons/arrow-left.svg" alt=""></button>',
  })

  var mixer = mixitup('.product-card');
  var sale = mixitup('.sale__product')
})