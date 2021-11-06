$(function () {
  $('.catalog__btn').on('click', function () {
    $('.catalog__btn').removeClass('catalog__btn--active');
    $(this).addClass('catalog__btn--active');
  })

  $('.catalog__btn--line').on('click', function () {
    $('.product-card').addClass('product-card--stock');
    $('.product-box__inner').addClass('product-box__inner--line')
  })

  $('.catalog__btn--grid').on('click', function () {
    $('.product-card').removeClass('product-card--stock');
    $('.product-card').addClass('product-card--catalog');
    $('.product-box__grid').addClass('product-box__inner--grid')
    $('.product-box__inner').removeClass('product-box__inner--line')
  })

  $('.catalog__select').styler({

  })
  $(".aside-catalog__range").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.aside-catalog__to').text(data.from)
      $('.aside-catalog__from').text(data.to)
    },
    onChange: function (data) {
      $('.aside-catalog__to').text(data.from)
      $('.aside-catalog__from').text(data.to)
    },
  });

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

  $('.header__btn--cart').on('click', function () {
    $('.cart__menu').toggleClass('cart__menu--active');
    $('body').toggleClass('body--lock')
  })

  $('.header__btn--search').on('click', function () {
    $('.form').toggleClass('form--active')
  })

  $('.header__burger').on('click', function () {
    $('.header-menu').toggleClass('header-menu--active')
  })

  $(".aside-catalog__header").on('click', function () {
    if ($(this).next(".aside-catalog__content").hasClass("aside-catalog__content--active")) {
      $(this).next(".aside-catalog__content").removeClass("aside-catalog__content--active").slideUp()
      $(this).children("h2").toggleClass("aside-catalog__title--active")
    } else {
      $(".aside-catalog__content").removeClass("aside-catalog__content--active").slideUp()
      $(".aside-catalog__header h2").removeClass("aside-catalog__title--active")
      $(this).next(".aside-catalog__content").addClass("aside-catalog__content--active").slideDown()
      $(this).children("h2").addClass("aside-catalog__title--active")
    }
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
    }, ]
  })
  $('.brands__inner').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
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