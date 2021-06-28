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
    centerPadding: "325px",
    slidesToShow: 1,
    infinite: true,
    dots: true,
  });

});

