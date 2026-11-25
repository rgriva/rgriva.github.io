// Light/dark toggle. Contract: html[data-theme], localStorage["rgriva-theme"], #theme-toggle.
// The same key is read by rgriva.github.io/presentations, so the choice carries over.
// Without an explicit choice the site follows the system setting, live.
(function () {
  var key = "rgriva-theme";
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var explicit = false;

  try {
    explicit = /^(light|dark)$/.test(localStorage.getItem(key) || "");
  } catch (e) {}

  function apply(theme) {
    var dark = theme === "dark";
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(dark));
      button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      var label = button.querySelector("[data-theme-label]");
      if (label) label.textContent = dark ? "Light mode" : "Dark mode";
    });
  }

  apply(root.dataset.theme === "dark" ? "dark" : "light");

  document.addEventListener("click", function (event) {
    if (!event.target.closest("[data-theme-toggle]")) return;
    var next = root.dataset.theme === "dark" ? "light" : "dark";
    explicit = true;
    try {
      localStorage.setItem(key, next);
    } catch (e) {}
    apply(next);
  });

  if (mq) {
    var onSystemChange = function (event) {
      if (!explicit) apply(event.matches ? "dark" : "light");
    };
    if (mq.addEventListener) mq.addEventListener("change", onSystemChange);
    else if (mq.addListener) mq.addListener(onSystemChange);
  }

  // Follow changes made in other tabs.
  window.addEventListener("storage", function (event) {
    if (event.key === key && /^(light|dark)$/.test(event.newValue || "")) {
      explicit = true;
      apply(event.newValue);
    }
  });
})();
