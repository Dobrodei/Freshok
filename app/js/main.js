$(function () {
  $('.product-main__slide').on('click', function () {
    $('.product-main__gallerybox').toggleClass('product-main__gallerybox--active')
    $('body').toggleClass('body--lock')
  })

  $('.product-main__close').on('click', function () {
    $('.product-main__gallerybox').toggleClass('product-main__gallerybox--active')
    $('body').toggleClass('body--lock')
  })

  $('.product-main__tab').on('click', function (e) {
    e.preventDefault();
    $('.product-main__tab').removeClass('product-main__tab--active')
    $(this).addClass('product-main__tab--active');

    $('.product-main__item').removeClass('product-main__item--active')
    $($(this).attr('href')).addClass('product-main__item--active')
  })

  $('.raiting').rateYo({
    starWidth: "16px",
    ratedFill: "#FFB800",
    normalFill: "#C1C1C1",
    spacing: "6px",
    readOnly: true,
    starSvg: 
    "<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0.0229578 6.16432C0.0780821 5.9946 0.224738 5.87091 0.401299 5.84529L5.36137 5.12451L7.57965 0.629933C7.65858 0.469933 7.82155 0.368652 7.99996 0.368652C8.17839 0.368652 8.34133 0.469933 8.4203 0.629933L10.6387 5.12451L15.5986 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4364 15.5776L7.99999 13.2451L3.56372 15.5775C3.40576 15.6606 3.21441 15.6467 3.07007 15.5419C2.92573 15.437 2.85338 15.2593 2.88354 15.0834L3.73094 10.1434L0.141551 6.64478C0.0138016 6.52028 -0.0322304 6.334 0.0229578 6.16432Z'/></svg>",
  });

  $('.catalog__filter').on('click', function (event) {
    $('.aside-catalog').toggleClass('aside-catalog--active');
    $('body').toggleClass('body--lock')
  })

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

  $('.catalog__select, .product-main__input, .reviews-box__checkbox').styler({

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

  $('.recent-box__inner').slick({
    nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><svg><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-arrow  slick-arrow--prev"><svg><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    slidesToShow: 1,
    responsive: [{
      breakpoint: 800,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
      }
    }, ]
  })

  $('.product-main__gallerybig').slick({
    nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><svg><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-arrow  slick-arrow--prev"><svg><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    dots: true,
    fade:true,
    responsive: [{
      breakpoint: 1040,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
      }
    }, ]
  })

  $('.product-main__gallery').slick({
    nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><svg><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-arrow  slick-arrow--prev"><svg><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    dots:false,
    fade:true,
    responsive: [{
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    }, ]
  })

  $('.discounts-slider__row, .recent-box__inner, .product-main__gallery, .product-main__gallerybig').slick({
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