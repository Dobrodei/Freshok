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
    nextArrow: '<button type="button" class="slick-arrow slick-arrow__right slick-next"><svg><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-arrow  slick-arrow__left slick-prev"><svg><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
  })
  $('.brands__inner').slick({
    arrows:false,
    slidesToShow: 6,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  })
  
 var containerEl1 = $('[data-ref="container-1"]');
 var containerEl2 = $('[data-ref="container-2"]');

 var config = {
   controls: {
     scope: 'local'
   }
 };

 var mixer1 = mixitup(containerEl1, config);
 var mixer2 = mixitup(containerEl2, config);
  
})

