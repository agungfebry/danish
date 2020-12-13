/*header trasnparent*/
$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $("nav.navbar").removeClass("bg-transparent");
    $("nav.navbar").addClass("bg-darkC");
  } else {
    $("nav.navbar").addClass("bg-transparent");
    $("nav.navbar").removeClass("bg-darkC");
  }
});