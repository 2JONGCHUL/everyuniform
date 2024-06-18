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

// 헤더 사이드메뉴바 호버
function SideMenuClickOn() {
  $(".header-sidemenu-bar > .side-bar").click(function () {
    $(".header-sidemenu-bar > .side-bar").addClass("on");
    $(".header-sidemenu-bar > .side-close").addClass("on");
    $(".header-sidemenu").addClass("on");
    $("html").addClass("header-side-box-actived");
  });
}
SideMenuClickOn();

function SideMenuClickRemove() {
  $(".header-sidemenu-bar > .side-close").click(function () {
    $(".header-sidemenu-bar > .side-bar").removeClass("on");
    $(".header-sidemenu-bar > .side-close").removeClass("on");
    $(".header-sidemenu").removeClass("on");
    $("html").removeClass("header-side-box-actived");
  });
}
SideMenuClickRemove();

function sideMenu__init() {
  $(".header-sidemenu-content > ul ul").stop().slideUp();

  $(".header-sidemenu-content > ul > li").click(function () {
    let $this = $(this);
    let has = $this.hasClass("active");

    if (has) {
      $this.find(" > ul").stop().slideUp(300);
      $this.find("active").removeClass("active");
      $this.removeClass("active");
    } else {
      $this.find(" > ul").stop().slideDown(300);
      $this.addClass("active");
    }

    $(".header-sidemenu-content ul").click(function (e) {
      // e.stopPropagation();
      return false;
    });
  });
}
sideMenu__init();
