$(document).ready(function() {
  jQuery(window).scroll(function () {
    var threshold = 700;
    if (jQuery(window).scrollTop() >= 300)
      $(".slideout").addClass("active");
    else
      $(".slideout").removeClass("active");
  });
});
