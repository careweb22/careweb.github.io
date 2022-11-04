// preloader
function counter() {
  var count = setInterval(function () {
    var c = parseInt($(".counter").text());
    $(".counter").text((++c).toString());
    if (c == 100) {
      clearInterval(count);
      $(".counter").addClass("hide");
      $(".preloader").addClass("hide");
    }
  }, 60);
}
counter();

// navbar scroll bg
let nav = document.querySelector("nav");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 450) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};
