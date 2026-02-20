(function () {
  var storageKey = "rgriva-theme";
  var root = document.documentElement;
  var mediaQuery = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

  function getSystemTheme() {
    return mediaQuery && mediaQuery.matches ? "dark" : "light";
  }

  function getStoredTheme() {
    try {
      var storedTheme = localStorage.getItem(storageKey);
      return storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : null;
    } catch (error) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      /* Ignore persistence failures in restricted contexts. */
    }
  }

  function updateToggle(theme) {
    var toggle = document.getElementById("theme-toggle");
    if (!toggle) {
      return;
    }

    var isDark = theme === "dark";
    var icon = toggle.querySelector(".theme-toggle-icon");
    var label = toggle.querySelector(".theme-toggle-label");

    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    if (icon) {
      icon.className =
        "fas " + (isDark ? "fa-sun" : "fa-moon") + " theme-toggle-icon";
    }

    if (label) {
      label.textContent = isDark ? "Light mode" : "Dark mode";
    }
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    updateToggle(theme);
  }

  var storedTheme = getStoredTheme();
  var hasExplicitPreference = storedTheme !== null;
  var initialTheme =
    root.dataset.theme === "light" || root.dataset.theme === "dark"
      ? root.dataset.theme
      : hasExplicitPreference
        ? storedTheme
        : getSystemTheme();

  applyTheme(initialTheme);

  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      hasExplicitPreference = true;
      setStoredTheme(nextTheme);
      applyTheme(nextTheme);
    });
  }

  if (mediaQuery) {
    var handleSystemThemeChange = function (event) {
      if (!hasExplicitPreference) {
        applyTheme(event.matches ? "dark" : "light");
      }
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleSystemThemeChange);
    }
  }
})();
