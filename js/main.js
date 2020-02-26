$(document).ready(function(){

  $(".js-getcall").click(function(){
    $(".popup-block").hide();
    $("#popup-block").show();
    $(".popup").addClass("popup--show");
  });
  $(".popup-close").click(function(){
    $(".popup").removeClass("popup--show");
  });
  $(".popup-bg").click(function(){
    $(".popup").removeClass("popup--show");
  });

  $(".butter").click(function(){
    
  });
  $(".menu-close").click(function(){
    
  });

  
  $(".js-slider").slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false
    
  });
  
  


  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top});
    return false;
  });
  
  
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });

  
  ymaps.ready(function () {
    if ($("#map").length != 0) {
      var myMap = new ymaps.Map('map', {
          center: [56.6362, 47.85],
          zoom: 13,
          controls: []
        }),
        myPlacemark = new ymaps.Placemark([56.635471, 47.837894], {
          hintContent: 'улица Строителей, 19',
          balloonContent: 'улица Строителей, 19'
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'images/pin.png',
          iconImageSize: [41, 41],
          iconImageOffset: [-20, -41]
        }),

        myPlacemark2 = new ymaps.Placemark([56.637838, 47.868302], {
          hintContent: 'улица Машиностроителей, 61',
          balloonContent: 'улица Машиностроителей, 61'
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'images/pin2.png',
          iconImageSize: [41, 41],
          iconImageOffset: [-20, -41]
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark2);
        myMap.behaviors.disable('scrollZoom');
    }
    

    if ($("#map-popup").length != 0) {
      var myMapPopup = new ymaps.Map('map-popup', {
        center: [56.6362, 47.85],
        zoom: 13,
        controls: []
      }),
      myPlacemarkPopup = new ymaps.Placemark([56.635471, 47.837894], {
        hintContent: 'улица Строителей, 19',
        balloonContent: 'улица Строителей, 19'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pin.png',
        iconImageSize: [41, 41],
        iconImageOffset: [-20, -41]
      }),

      myPlacemarkPopup2 = new ymaps.Placemark([56.637838, 47.868302], {
        hintContent: 'улица Машиностроителей, 61',
        balloonContent: 'улица Машиностроителей, 61'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pin2.png',
        iconImageSize: [41, 41],
        iconImageOffset: [-20, -41]
      });
      myMapPopup.geoObjects.add(myPlacemarkPopup);
      myMapPopup.geoObjects.add(myPlacemarkPopup2);
      myMapPopup.behaviors.disable('scrollZoom');
    }
    
  });
});