function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});



$(document).ready(function () {

  // HEADER ON SCROLL
  const headerBottom = $(".header-bottom");
  $(document).scroll(function () {
    if (window.pageYOffset > $(".header").height() * 1.25) {
      headerBottom.addClass("_fixed");
    } else {
      headerBottom.removeClass("_fixed");
    }
  });

  // SLIDER
  const slider = $(".game-slider__body");
  slider.slick({
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 770,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: "0px",
          dots: false,
        },
      },
    ],
  });
  
  // HAMBURGER 
  $('.header__burger').click(function () {
    $(this).toggleClass('_animated');
    $('.header-mobile').toggleClass('_active');
    $('body').toggleClass('_fixed');
  });

  const flipCards = document.querySelectorAll('.info-status__card');
  // FLIP CARDS
  if($(window).width() <= 992) {
    flipCards.forEach(element => {
      element.addEventListener('click', function () {
        this.classList.toggle('_reversed');
      });
    });
  }

});

