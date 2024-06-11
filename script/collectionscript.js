function header_scroll() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  });
}
header_scroll();

// 헤더 nav 호버
function navHover() {
  $(".nav-box").hover(
    function () {
      $("#header").addClass("on");
      $(".nav-box > li > a").addClass("on");
      $(".header-wrap").addClass("on");
    },
    function () {
      $("#header").removeClass("on");
      $(".nav-box > li > a").removeClass("on");
      $(".header-wrap").removeClass("on");
    }
  );
}
navHover();
