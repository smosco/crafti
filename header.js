"use strict";

/*add event listener on multiple elements */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/*mobile navbar toggle*/

const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElements(navToggler, "click", toggleNav);

/*active header when window scroll down to 100px*/

const header = document.querySelector("[data-header]");

const headerActive = () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", headerActive);
