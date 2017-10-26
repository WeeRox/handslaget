$(document).ready(function() {
  if (!Modernizr.touchevents {
    $("#hero").parallax(0.15);
  }
});
