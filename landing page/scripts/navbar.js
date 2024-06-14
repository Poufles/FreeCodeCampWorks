// THIS CODE PART UNDER IS COPIED FROM STACK OVERFLOW //

const topNav = document.querySelector(".header-nav").offsetHeight;

var el = document.querySelector('.header-nav');
var movEl = el.offsetTop;

window.onscroll = function () {
  myScrollFunction();
};

function myScrollFunction() {
  const nav = movEl - document.documentElement.scrollTop - topNav;

  if (nav <= -90) {
    el.setAttribute(
      "style",
      "position: fixed; top: 0; backdrop-filter: blur(7px)"
    );
  } else {
    el.removeAttribute("style", "position: absolute; bottom: 0; backdrop-filter: blur(7px)");
  }
}

// THIS CODE PART ABOVE IS COPIED FROM STACK OVERFLOW //