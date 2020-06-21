'use strict';
var pageHeader = document.querySelector('.nav');
var headerToggle = document.querySelector('.nav__toggle-button');

if (pageHeader) {
  pageHeader.classList.remove('nav--noscript');
  pageHeader.classList.add('nav--closed');
}

if (headerToggle) {
  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('nav--closed')) {
      pageHeader.classList.remove('nav--closed');
      pageHeader.classList.add('nav--opened');
    } else {
      pageHeader.classList.add('nav--closed');
      pageHeader.classList.remove('nav--opened');
    }
  });
}

