// THIS CODE PART UNDER IS COPIED FROM STACK OVERFLOW //

const topNav = document.querySelector(".header-nav").offsetHeight;


var el = document.querySelector('.header-nav');
var movEl = el.offsetTop;

const logo = el.querySelector(".logo-container");

const searchWrapper = el.querySelector(".search-wrapper");

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

    el.classList.add("justify-content-space-between");

    logo.classList.add("display-block");

    searchWrapper.classList.add("display-block");
  } else {
    el.removeAttribute("style", "position: absolute; bottom: 0; backdrop-filter: blur(7px)");

    el.classList.remove("justify-content-space-between");

    logo.classList.remove("display-block")

    searchWrapper.classList.remove("display-block");
  }
}

// THIS CODE PART ABOVE IS COPIED FROM STACK OVERFLOW //