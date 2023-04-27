// slick-slider init
$(function(){
    $('.head-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="../img/next-arrow.svg" alt="next-arrow"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="../img/prev-arrow.svg" alt="prev-arrow"></button>',
        responsive: [
          {
            breakpoint: 640,
            settings: {
              arrows: false,
            },
            arrows: false,
          },
        ]
      });
})


// slick-slider init
$(function(){
  $('.article__slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dotsClass: 'slick-dots-article',

    });
})



$(".footer-btn").click(function(){
  // alert("The paragraph was clicked.");
  window.scrollTo({top: 0});

});