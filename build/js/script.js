'use strict';
var pageHeaderNav = document.querySelector('.nav');
var headerNavToggle = document.querySelector('.nav__toggle-button');

if (pageHeaderNav) {
  pageHeaderNav.classList.remove('nav--noscript');
  pageHeaderNav.classList.add('nav--closed');
}

if (headerNavToggle) {
  headerNavToggle.addEventListener('click', function () {
    if (pageHeaderNav.classList.contains('nav--closed')) {
      pageHeaderNav.classList.remove('nav--closed');
      pageHeaderNav.classList.add('nav--opened');
    } else {
      pageHeaderNav.classList.add('nav--closed');
      pageHeaderNav.classList.remove('nav--opened');
    }
  });

}
