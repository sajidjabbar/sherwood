// Pre Loader Js
tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "expo.inOut",
  },
});

tl.to(".slide-1", { width: 0 }).to("#introduction", { height: 0 });
// Pre Loader Js

// Mobile Header Js
$("header .canvas_btn").click(function () {
  $(".mobile_header").addClass("show");
});

$(".mobile_header .cancel").click(function () {
  $(".mobile_header").removeClass("show");
});
// Mobile Header Js

// Header Fixed Js
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 150) {
    $("header#headerTop").addClass("active");
  } else {
    $("header#headerTop").removeClass("active");
  }
});
// Header Fixed Js

// Menu Active Js
// const CurrentLocation = location.href;
// const menuItem = document.querySelectorAll(".navs-menu li a");
// const menuLength = menuItem.length;
// for (let i = 0; i < menuLength; i++) {
//   if (menuItem[i].href === CurrentLocation) {
//     menuItem[i].className = "active_tab";
//   }
// }
// Menu Active Js
