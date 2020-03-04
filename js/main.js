$(document).ready(function(){

  function appendFilter() {
    console.log(window.innerWidth);
    if (window.innerWidth <= 979) {
      $("#filter").appendTo("#filter-mobile");
    } else {
      $("#filter").appendTo("#sidebar");
    }
  }
  $(window).resize(function(){
    appendFilter();
  });
  appendFilter();

  $(".js-call").click(function(){
    $(".popup-block").hide();
    $("#popup-call").show();
    $(".popup").addClass("popup--show");
  });
  $(".js-city-change").click(function(){
    $(".popup-block").hide();
    $("#popup-city").show();
    $(".popup").addClass("popup--show");
  });
  $(".popup-close").click(function(){
    $(".popup").removeClass("popup--show");
  });
  $(".popup-bg").click(function(){
    $(".popup").removeClass("popup--show");
  });

  $(".js-filter-open").click(function(){
    $(this).parents(".filter-mobile").find(".filter").toggleClass("active");
    $(this).toggleClass("active");
  });

  $(".js-butter--desktop").click(function(){
    $(this).toggleClass("icon--close");
    $(".menu-collapse").toggleClass("menu-collapse--open");
  });
  $(".js-butter--mobile").click(function(){
    $("#menu").addClass("active");
  });
  $(".js-menu-close").click(function(){
    $("#menu").removeClass("active");
  });

  $(".js-menu-catalog-open").click(function(){
    $(this).toggleClass("active");
    $(this).parents(".menu-catalog").find(".menu-desktop").slideToggle(200);
  });

  $(".js-footer-menu-open").click(function(){
    $(this).toggleClass("active");
    $(this).parents(".footer__menu").find(".footer__menu_list").slideToggle(200);
  });

  $(".js-input-search").on('input keyup', function(e) {
    $(this).parents("form").find(".city-search__results").show();
  });
  $(".js-input-search").on('focusout', function(e) {
    $(this).parents("form").find(".city-search__results").hide();
  });
  $(".js-cart-open").click(function() {
    $(".cart").addClass("cart--open");
  });
  $(".js-cart-close").click(function() {
    $(".cart").removeClass("cart--open");
    $(".cart__btn").removeClass("cart__btn--active");
  });

  $(".sort__item").click(function(){
    $(".sort__item").removeClass("active");
    $(this).addClass("active");
  });
  $(".js-sort").click(function(){
    $(this).toggleClass("active");
  });

  $(".cart__btn").click(function(){
    $(".cart__btn").removeClass("cart__btn--active");
    $(this).addClass("cart__btn--active");
    $(".cart-tab-link").removeClass("cart-tab-link--active");
    if ($(this).hasClass("cart__btn--cart")) {
      $(".cart-block-cart").show();
      $(".cart-block-wish").hide();
      $(".cart-ready-link").addClass("cart-tab-link--active");
    }
    if ($(this).hasClass("cart__btn--wish")) {
      $(".cart-block-cart").hide();
      $(".cart-block-wish").show();
      $(".cart-wish-link").addClass("cart-tab-link--active");
    }
  });

  $(".cart-tab-link").click(function(){
    $(".cart-tab-link").removeClass("cart-tab-link--active");
    $(this).addClass("cart-tab-link--active");
    $(".cart__btn").removeClass("cart__btn--active");
    if ($(this).hasClass("cart-ready-link")) {
      $(".cart-block-cart").show();
      $(".cart-block-wish").hide();
      $(".cart__btn--cart").addClass("cart__btn--active");
    }
    if ($(this).hasClass("cart-wish-link")) {
      $(".cart-block-cart").hide();
      $(".cart-block-wish").show();
      $(".cart__btn--wish").addClass("cart__btn--active");
    }
  });

  $(".cart-item__remove").click(function(){
    var then = $(this).parents(".cart-item");
    $(then).hide(200);
    setTimeout(function () {
      $(then).remove();
    }, 200);
  });

  $(".js-search-open").click(function(){
    $(".search").addClass("search--open");
  });
  $(".js-search-close").click(function(){
    $(".search").removeClass("search--open");
  });

  $(".js-wish-add").click(function(){
    $(this).toggleClass("active");
  });
  $(".js-compare-add").click(function(){
    $(this).toggleClass("active");
  });
  $(".js-cart-add").click(function(){
    $(this).addClass("active");
    $(this).parents(".item-btn-container").addClass("active");
  });

  $(".js-filter-block-open").click(function(){
    $(this).parents(".filter__block").toggleClass("active");
    $(this).parents(".filter__block").find(".filter__block_content").slideToggle(200);
  });

  $(".toggle").click(function(){
    $(this).toggleClass("toggle-left");
  });


  /* SOLUTIONS */
  $(".solution__btn").click(function(){
    var num = parseInt($(this).attr("data-content"));
    $(this).parents(".solution").find(".solution__btn").removeClass("active");
    $(this).addClass("active");

    $(this).parents(".solution").find(".solution__slide").hide();
    $(this).parents(".solution").find(".solution__slide:nth-child(" + (num + 1) + ")").show();
  });
  $(".solution__items-slide").click(function(){
    $(".solution__items-slide").removeClass("active");
    $(this).addClass("active");
  });

  $(".solutions").slick({
    infinite: false,
    speed: 200,
    autoplay: false,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    fade: true,
    appendDots: "#solution-dots",
    slide: ".solution"
  });

  $(".solution__arrow--prev").click(function(){
    $(".solutions").slick('slickPrev');
  });

  $(".solution__arrow--next").click(function(){
    $(".solutions").slick('slickNext');
  });

  $('.solutions').on('afterChange', function(event, slick, currentSlide){
    $(".solution-current-slide").text("0" + (currentSlide + 1));
  });

  var allCountSolutions = $(".solution").length;
  if (allCountSolutions < 10) {
    allCountSolutions = "0" + allCountSolutions;
  }
  $(".solution-all-slides").text(allCountSolutions);


  
  $(".js-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });


  /*Price slider */
  if ($("#price-slider").length > 0) {
    var html5Slider = document.getElementById('price-slider'),
        minValue = parseInt($(html5Slider).attr("data-min")),
        maxValue = parseInt($(html5Slider).attr("data-max")),
        step = parseInt($(html5Slider).attr("data-step"));

    noUiSlider.create(html5Slider, {
        start: [110, 545],
        connect: true,
        step: step,
        range: {
            'min': minValue,
            'max': maxValue
        }
    });

    var inputMinNumber = document.getElementById('price-slider__input--min'),
    inputMaxNumber = document.getElementById('price-slider__input--max');

    html5Slider.noUiSlider.on('update', function (values, handle) {

        var value = values[handle];

        if (handle) {
            inputMaxNumber.value = Math.round(value);
        } else {
          inputMinNumber.value = Math.round(value);
        }
    });

    inputMaxNumber.addEventListener('change', function () {
        html5Slider.noUiSlider.set([null, this.value]);
    });

    inputMinNumber.addEventListener('change', function () {
      html5Slider.noUiSlider.set([this.value, null]);
    });
  }
    
  


  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top});
    return false;
  });
  
  
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });

  

  $(".counter-minus").click(function(){
    var step = parseFloat($(this).parents(".counter").attr("data-step")),
        current = parseFloat($(this).parents(".counter").find(".counter-value").val());
    current -= step;
    if (current < 0) {
      current = 0;
    }
    $(this).parents(".counter").find(".counter-value").val(current.toFixed(1));

    var onePrice = parseFloat($(this).parents(".cart-item").find(".cart-item-price-one strong").text());

    $(this).parents(".cart-item").find(".cart-item-price-full strong").text((onePrice * current).toFixed());
    
  });

  $(".counter-plus").click(function(){
    var step = parseFloat($(this).parents(".counter").attr("data-step")),
        current = parseFloat($(this).parents(".counter").find(".counter-value").val());
    current += step;
    $(this).parents(".counter").find(".counter-value").val(current.toFixed(1));
    var onePrice = parseFloat($(this).parents(".cart-item").find(".cart-item-price-one strong").text());

    $(this).parents(".cart-item").find(".cart-item-price-full strong").text((onePrice * current).toFixed());
  });
  $(".counter-value").on("input keyup", function(){
    var onePrice = parseFloat($(this).parents(".cart-item").find(".cart-item-price-one strong").text());

    $(this).parents(".cart-item").find(".cart-item-price-full strong").text((onePrice * parseFloat($(this).val())).toFixed());
    
  });


});