$(function() {
  var elements = $(".animation");
  var scroll;

  $(window).scroll(function() {
    scroll = $(window).scrollTop() + $(window).height();
    requestAnimationFrame(animate);
  });

  function animate() {
    elements.each(function(key) {
      var element = $(this);
      var element_top = element.offset().top;

      if (scroll >= element_top) {
        element.addClass("animation-visible");
        element.removeClass("animation");
        elements = $('.animation');
      }
    });
  }
});
