// Keep the current page visible in the nav row when it scrolls sideways on phones.
(function () {
  var nav = document.querySelector(".nav-mono");
  var current = nav && nav.querySelector("[aria-current]");
  if (current && nav.scrollWidth > nav.clientWidth) {
    nav.scrollLeft = current.offsetLeft - (nav.clientWidth - current.offsetWidth) / 2;
  }
})();
