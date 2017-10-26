/*
$(function() {
  if (!Modernizr.touchevents) {
    $(window).scroll(function() {
      requestAnimationFrame(parallax);
    });
  }
*/

$(function() {
  $.fn.parallax = function(speed) {
    if ($(this).length > 1) {
      $(this).each(function() {
        $(this).parallax();
      });
    } else {
      if (arguments.length < 1 || speed === null) {
        speed = 0.15;
      }

      var element = $(this);
      var height = element.height();
      var top = element.offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      $(window).resize(function() {
        windowHeight = $(window).height();
      });

      // if scroll > (height + top) then the element is above the viewport
      // if (scroll + windowHeight) < top then the element is below the viewport

      $(window).scroll(function() {
        scroll = $(window).scrollTop();
        if (!(scroll > (height + top)) && !((scroll + windowHeight) < top)) {
          element.css("transform", "translateY(" + Math.round((top - scroll) * speed) + "px)");
        }
      });
    }
  }
});
