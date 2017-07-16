function Apps() {

  $('.slider-nav').slick({
  arrows: false,
  slidesToShow: 6,
  asNavFor: '.slider-for',
  infinite: true
  });

  $('.slider-for').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: config.slick.speed,
  asNavFor: '.slider-nav',
});


//Start weather as highlighted
$('#weather').children('img').attr('src', './img/Apps/weather_black.png');
$('#weather').css('background-color', 'white');
$('#weather').css('color', 'black');

// Get current slide & change background-color
$('.slider-for').on('afterChange', function(event, slick, currentSlide, nextSlide){
  var currentApp;

  if(currentSlide == "0") {
    currentApp = 'weather';
    //console.log("0 = " + currentApp);
  } else if(currentSlide == "1") {
    currentApp = 'stocks';
    //console.log("1 = " + currentApp);
  } else if(currentSlide == "2") {
    currentApp = 'shows';
    //console.log("2 = " + currentApp);
  } else if(currentSlide == "3") {
    currentApp = 'traffic';
    //console.log("3 = " + currentApp);
  } else if(currentSlide == "4"){
    currentApp = 'calendar';
    //console.log("4 = " + currentApp);
  } else {
    currentApp = 'reminders';
    //console.log("5 = " + currentApp);
  }

  //console.log("Change scope to: " + currentApp);

  //Turn current app icon black and background white
  $('.' + currentApp + "_app").children("img").attr('src', './img/Apps/' + currentApp + '_black.png');
  $('.' + currentApp + "_app").css('background-color', 'white');
  $('.' + currentApp + "_app").css('color', 'black');

  //Turn siblings white
  $('.' + currentApp + "_app").siblings().each(
    function() {
      var currentAppSiblings = $(this).attr('id');
      //console.log("Siblings: " + currentAppSiblings);
      $('.' + currentAppSiblings + "_app").children("img").attr('src', './img/Apps/' + currentAppSiblings + "_white.png");
      $('.' + currentAppSiblings + "_app").css('background-color', 'transparent');
      $('.' + currentAppSiblings + "_app").css('color', 'white');
    }
)
});

}
angular.module('Artemis')
    .controller('Apps', Apps);
