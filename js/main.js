// Pre Loader Js
$(window).on("load", function () {
  console.log("test");
  $("#preloader").fadeOut(1000);
});
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

// Go to Top Button Js On Scroll
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 800) {
    $(".go_to_top").addClass("active");
  } else {
    $(".go_to_top").removeClass("active");
  }
});
// Go to Top Button Js On Scroll

// Gallery Page Lighbox Js
let link;
let imageCount = 23;
let regExDigit = /\d+/;

function imageLink() {
  let regExImage = /#image\d+/;
  let image = location.href;

  link = regExImage.exec(image)[0];
  link = regExDigit.exec(link)[0];
}

let next = document.getElementById("next-lightbox");
let prev = document.getElementById("prev-lightbox");

next.addEventListener("click", (evt) => {
  evt.preventDefault();
  imageLink();
  let newLink = Number(link) + 1;
  if (newLink > imageCount) newLink = 1;
  location.href = location.href.replace(regExDigit, newLink);
});

prev.addEventListener("click", (evt) => {
  evt.preventDefault();
  imageLink();
  let newLink = Number(link) - 1;
  if (newLink < 1) newLink = imageCount;
  location.href = location.href.replace(regExDigit, newLink);
});
// Gallery Page Lighbox Js
