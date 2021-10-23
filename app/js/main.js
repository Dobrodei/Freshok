$(function () {

  $('.header-catalog').on('click', function (event) {
    event.preventDefault();
    $('.header-catalog').toggleClass('header-catalog--active')
  })
  
  $('main').on('click', function (event) {
    $('.header-catalog--active').removeClass('header-catalog--active');
  });


  $('.cart__menu-close').on('click', function () {
    $('.cart__menu').toggleClass('cart__menu--active')
    $('body').removeClass('body--lock')
  })

  $('.header__user-cart').on('click', function () {
    $('.cart__menu').toggleClass('cart__menu--active');
    $('body').toggleClass('body--lock')
  })

  $('.header__search').on('click', function () {
    $('.form').toggleClass('form--active')
  })

  $('.header__burger').on('click', function () {
    $('.header-menu').toggleClass('header-menu--active')
  })



  $('.discounts-slider__row').slick({
    adaptiveHeight: true,
    nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><svg><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-arrow  slick-arrow--prev"><svg><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
        }
      },
    ]
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

