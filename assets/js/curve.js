// Drawable yield curve in the landing-page header.
// Drag a point up or down; with a mouse or pen, press anywhere on the chart and sweep
// across to draw. Arrow keys move a focused point. Double-click resets the curve.
(function () {
  var fig = document.getElementById("curve");
  if (!fig) return;
  var svg = fig.querySelector("svg");
  var line = svg.querySelector(".line");
  var area = svg.querySelector(".area");
  var bg = svg.querySelector(".hit-bg");
  var groups = Array.prototype.slice.call(svg.querySelectorAll(".pt-g"));
  var tip = svg.querySelector(".tip");
  var tipRect = tip.querySelector("rect");
  var tipText = tip.querySelector("text");
  var spreadOut = fig.querySelector("[data-spread]");
  var shapeOut = fig.querySelector("[data-shape]");

  // Plot box (viewBox units) and yield range, in percent
  var X0 = 44, X1 = 344, YTOP = 24, YBOT = 164, RMIN = 3, RMAX = 5.5;
  var LABELS = ["3M", "1Y", "2Y", "5Y", "10Y", "30Y"];
  var NAMES = ["3-month", "1-year", "2-year", "5-year", "10-year", "30-year"];
  var MATS = [0.25, 1, 2, 5, 10, 30];
  var START = [4.3, 4.02, 3.82, 3.8, 4.14, 4.66];

  var lo = Math.log(MATS[0]), hi = Math.log(MATS[MATS.length - 1]);
  var xs = MATS.map(function (m) { return X0 + (X1 - X0) * (Math.log(m) - lo) / (hi - lo); });
  var rates = START.slice();
  var active = -1, drag = null, touched = false, anim = 0, timer = 0;

  function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
  function round2(v) { return Math.round(v * 100) / 100; }
  function yOf(r) { return YBOT - (YBOT - YTOP) * (r - RMIN) / (RMAX - RMIN); }
  function rOf(y) { return round2(clamp(RMIN + (YBOT - y) * (RMAX - RMIN) / (YBOT - YTOP), RMIN, RMAX)); }
  function f(n) { return n.toFixed(1); }

  // Monotone cubic interpolation (Steffen): smooth, and never overshoots the points.
  function curve(ys) {
    var n = xs.length, m = new Array(n), i;
    for (i = 1; i < n - 1; i++) {
      var h0 = xs[i] - xs[i - 1], h1 = xs[i + 1] - xs[i];
      var s0 = (ys[i] - ys[i - 1]) / h0, s1 = (ys[i + 1] - ys[i]) / h1;
      var p = (s0 * h1 + s1 * h0) / (h0 + h1);
      m[i] = (Math.sign(s0) + Math.sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
    }
    m[0] = (3 * (ys[1] - ys[0]) / (xs[1] - xs[0]) - m[1]) / 2;
    m[n - 1] = (3 * (ys[n - 1] - ys[n - 2]) / (xs[n - 1] - xs[n - 2]) - m[n - 2]) / 2;
    var d = "M" + f(xs[0]) + " " + f(ys[0]);
    for (i = 0; i < n - 1; i++) {
      var h = (xs[i + 1] - xs[i]) / 3;
      d += " C" + f(xs[i] + h) + " " + f(clamp(ys[i] + m[i] * h, YTOP, YBOT)) +
        " " + f(xs[i + 1] - h) + " " + f(clamp(ys[i + 1] - m[i + 1] * h, YTOP, YBOT)) +
        " " + f(xs[i + 1]) + " " + f(ys[i + 1]);
    }
    return d;
  }

  // Name the curve's shape: hump or trough in the belly first, then the 10Y-3M slope.
  function shape() {
    var ends = [rates[0], rates[5]], belly = rates.slice(1, 4);
    var spread = rates[4] - rates[0];
    if (Math.max.apply(null, belly) - Math.max.apply(null, ends) > 0.15) return "humped";
    if (Math.min.apply(null, ends) - Math.min.apply(null, belly) > 0.15) return "U-shaped";
    if (spread > 0.2) return "upward-sloping";
    if (spread < -0.2) return "inverted · recession watch";
    return "flat";
  }

  function showTip(i) {
    var y = yOf(rates[i]);
    tip.style.display = "";
    tipText.textContent = LABELS[i] + " " + rates[i].toFixed(2) + "%";
    var w = tipText.getComputedTextLength() + 12;
    var cx = clamp(xs[i], w / 2 + 2, 358 - w / 2);
    var top = y - 26 > 2 ? y - 26 : y + 10;
    tipRect.setAttribute("x", f(cx - w / 2));
    tipRect.setAttribute("y", f(top));
    tipRect.setAttribute("width", f(w));
    tipText.setAttribute("x", f(cx));
    tipText.setAttribute("y", f(top + 11.5));
  }

  function setActive(i) {
    active = i;
    groups.forEach(function (g, k) { g.classList.toggle("is-active", k === i); });
    if (i < 0) tip.style.display = "none";
    else showTip(i);
  }

  function render() {
    var ys = rates.map(yOf);
    var d = curve(ys);
    line.setAttribute("d", d);
    area.setAttribute("d", d + " L" + X1 + " " + YBOT + " L" + X0 + " " + YBOT + " Z");
    groups.forEach(function (g, i) {
      g.querySelectorAll("circle").forEach(function (c) {
        c.setAttribute("cx", f(xs[i]));
        c.setAttribute("cy", f(ys[i]));
      });
      var hit = g.querySelector(".hit");
      hit.setAttribute("aria-valuenow", rates[i].toFixed(2));
      hit.setAttribute("aria-valuetext", NAMES[i] + " yield " + rates[i].toFixed(2) + " percent");
    });
    if (active >= 0) showTip(active);
    if (spreadOut && shapeOut) {
      var s = rates[4] - rates[0];
      spreadOut.textContent = (s < -0.005 ? "−" : "+") + Math.abs(s).toFixed(2) + " pp";
      shapeOut.textContent = shape();
    }
  }

  function markTouched() {
    if (touched) return;
    touched = true;
    fig.classList.add("touched");
  }

  function cancelAnim() {
    if (anim) cancelAnimationFrame(anim);
    if (timer) clearTimeout(timer);
    anim = timer = 0;
  }

  function point(e) {
    var p = svg.createSVGPoint();
    p.x = e.clientX;
    p.y = e.clientY;
    return p.matrixTransform(svg.getScreenCTM().inverse());
  }

  function nearest(x) {
    var best = 0;
    xs.forEach(function (v, i) { if (Math.abs(v - x) < Math.abs(xs[best] - x)) best = i; });
    return best;
  }

  function move(e) {
    var p = point(e);
    if (drag.mode === "dot") {
      rates[drag.i] = rOf(p.y - drag.offset);
    } else {
      // Freehand: each column takes the pointer's height as it passes; fill skipped columns.
      var i = nearest(p.x), r = rOf(p.y);
      if (drag.last !== null && Math.abs(i - drag.last) > 1) {
        var step = i > drag.last ? 1 : -1;
        for (var k = drag.last + step; k !== i; k += step) {
          rates[k] = round2(drag.lastR + (r - drag.lastR) * (k - drag.last) / (i - drag.last));
        }
      }
      rates[i] = r;
      drag.last = i;
      drag.lastR = r;
      if (i !== active) setActive(i);
    }
    render();
  }

  function end() {
    if (!drag) return;
    drag = null;
    var focused = groups.some(function (g) { return g.querySelector(".hit") === document.activeElement; });
    if (!focused) setActive(-1);
  }

  groups.forEach(function (g, i) {
    var hit = g.querySelector(".hit");
    hit.addEventListener("pointerdown", function (e) {
      if (e.button > 0) return;
      e.preventDefault();
      cancelAnim();
      hit.setPointerCapture(e.pointerId);
      drag = { mode: "dot", i: i, offset: point(e).y - yOf(rates[i]) };
      markTouched();
      setActive(i);
      render();
    });
    // Let a finger on a point drag it instead of scrolling the page.
    hit.addEventListener("touchstart", function (e) { e.preventDefault(); }, { passive: false });
    hit.addEventListener("pointerenter", function () { if (!drag) setActive(i); });
    hit.addEventListener("pointerleave", function () {
      if (!drag && document.activeElement !== hit) setActive(-1);
    });
    hit.addEventListener("focus", function () { setActive(i); });
    hit.addEventListener("blur", function () { if (!drag) setActive(-1); });
    hit.addEventListener("keydown", function (e) {
      var step = { ArrowUp: 0.05, ArrowRight: 0.05, ArrowDown: -0.05, ArrowLeft: -0.05, PageUp: 0.25, PageDown: -0.25 }[e.key];
      if (!step) return;
      e.preventDefault();
      cancelAnim();
      markTouched();
      rates[i] = round2(clamp(rates[i] + step, RMIN, RMAX));
      render();
    });
  });

  bg.addEventListener("pointerdown", function (e) {
    // Freehand drawing with a mouse or pen; a finger on empty space still scrolls the page.
    if (e.button > 0 || e.pointerType === "touch") return;
    e.preventDefault();
    cancelAnim();
    bg.setPointerCapture(e.pointerId);
    drag = { mode: "draw", last: null, lastR: null };
    markTouched();
    move(e);
  });

  svg.addEventListener("pointermove", function (e) { if (drag) move(e); });
  svg.addEventListener("pointerup", end);
  svg.addEventListener("pointercancel", end);

  // Double-click springs back to the starting curve.
  svg.addEventListener("dblclick", function () {
    cancelAnim();
    var from = rates.slice(), t0 = performance.now();
    var dur = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 450;
    function finish() {
      cancelAnim();
      rates = START.slice();
      touched = false;
      fig.classList.remove("touched");
      render();
    }
    function step(now) {
      var t = dur ? Math.min(1, (now - t0) / dur) : 1, k = 1 - Math.pow(1 - t, 3);
      if (t >= 1) return finish();
      rates = from.map(function (v, i) { return v + (START[i] - v) * k; });
      render();
      anim = requestAnimationFrame(step);
    }
    anim = requestAnimationFrame(step);
    // Finish on time even where animation frames are throttled (background tabs).
    timer = setTimeout(finish, dur + 60);
  });

  render();
})();
