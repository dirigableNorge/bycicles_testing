'use strict';
var pageHeader = document.querySelector('.nav');
var headerToggle = document.querySelector('.nav__toggle-button');

if (pageHeader) {
  pageHeader.classList.remove('nav--noscript');
  pageHeader.classList.add('nav--closed');
}

function navToggle () {
  if (pageHeader.classList.contains('nav--closed')) {
    pageHeader.classList.remove('nav--closed');
    pageHeader.classList.add('nav--opened');
  } else {
    pageHeader.classList.add('nav--closed');
    pageHeader.classList.remove('nav--opened');
  }
}

if (headerToggle) {
  headerToggle.addEventListener('click', navToggle);
}

var navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(function (link) {
  link.addEventListener('click', navToggle);
});


var smoothScroll = new SmoothScroll('a[href^="#"]');

var phoneInput = document.getElementById('subscribePhone');

if (phoneInput) {
  var phoneMask = IMask(phoneInput, {mask: '0000000000'});
}

