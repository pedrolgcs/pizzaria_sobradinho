$(document).ready(function(){
   $('.autoplay').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000,
   });
});
