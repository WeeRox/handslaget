$(function() {
  if (!Modernizr.touchevents) {
    $(window).scroll(function() {
      requestAnimationFrame(parallax);
    });
  }

  function parallax() {
    var scrollTop = $(window).scrollTop();
     $("#hero img").css("top", Math.round(scrollTop * 0.2) + "px");
  }
});
