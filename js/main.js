/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  $('input[type="tel"]').click(function(){
    if ($(this).val() == "+7 (___) ___-__-__") {
      $(this).setCursorPosition(4);
    }
  });

  $('input[type="tel"]').keyup(function(){
    if ($(this).val() == "+7 (8__) ___-__-__") {
      $(this).val($(this).val().replace('8','_'));
      $(this).mask("+7 (999) 999-99-99");
      $(this).attr('placeholder', '+7 (___) ___-__-__');
      $(this).setCursorPosition(4);
    }
  });




$(document).ready(function(){

  function appendFilter() {
    if (window.innerWidth <= 979) {
      $("#filter").appendTo("#filter-mobile");
    } else {
      $("#filter").appendTo("#sidebar");
    }
  }
  function appendTth() {
    if (window.innerWidth <= 1280) {
      $("#tth").appendTo("#content-tab1 .tabs-section__blocks");
    } else {
      $("#tth").appendTo("#tth-list");
    }
  }
  $(window).resize(function(){
    appendFilter();
    appendTth();
  });
  appendFilter();
  appendTth();

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

  $(".tabs-section-title ").click(function(){
    $(this).parent(".tabs-section").toggleClass("active");
    $(this).parent(".tabs-section").find(".tabs-section__blocks").slideToggle(200);
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

  $("#article-title-mobile").text($("#article-title-desktop").text());


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

  $(".solution .solution__items-slide").click(function(){
    var path = $(this).find("img").attr("src");
    $(this).parents(".solution__slide").find(".item__img img").attr("src", path);
  });

  // $(".article .solution__items-slide").click(function(){
  //   var path = $(this).find("img").attr("src");
  //   $(this).parents(".article-media").find(".article-media__img img").attr("src", path);
  // });

  $(".js-toggle").click(function(){
    $(this).toggleClass("toggle-left");
    $(".article-media__slider").removeClass("active");
    if ($(this).hasClass("toggle-left")) {
      $(".article-toggle__right").addClass("active");
      $(".article-toggle__left").removeClass("active");
      $("#ams-tovar").addClass("active");
    } else {
      $(".article-toggle__left").addClass("active");
      $(".article-toggle__right").removeClass("active");
      $("#ams-photo").addClass("active");
    }
  });
  $(".article-toggle__left").click(function(){
    $(".article-toggle__right").removeClass("active");
    $(this).addClass("active");
    $(this).parents(".article-toggle").find(".toggle").removeClass("toggle-left");
    $(".article-media__slider").removeClass("active");
    $("#ams-photo").addClass("active");
  });
  $(".article-toggle__right").click(function(){
    $(".article-toggle__left").removeClass("active");
    $(this).addClass("active");
    $(this).parents(".article-toggle").find(".toggle").addClass("toggle-left");
    $(".article-media__slider").removeClass("active");
    $("#ams-tovar").addClass("active");
  });


  /* ARTICLE SLIDER */


  
  $(".js-slider").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('.js-media-for-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.js-media-nav-slider',
    adaptiveHeight: true,
    lazyLoad: 'ondemand'
  });
  $('.js-media-nav-slider').slick({
    variableWidth: true,
    arrows: false,
    asNavFor: '.js-media-for-slider',
    dots: false,
    focusOnSelect: true,
    centerMode: true
  });

  $(".js-media-prev").click(function(){
    $('.js-media-nav-slider').slick("slickPrev");
  });
  $(".js-media-next").click(function(){
    $('.js-media-nav-slider').slick("slickNext");
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