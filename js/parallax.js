$(function() {
  var hero = $("#hero img");
  var currScrollTop;

  if (!Modernizr.touchevents) {
    $(window).scroll(function() {
      currScrollTop = $(this).scrollTop();
      requestAnimationFrame(parallax);
    });
  }

  function parallax() {
    hero.css("top", (currScrollTop * 0.5) + "px");
  }
});
