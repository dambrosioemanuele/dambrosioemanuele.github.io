/*
 * Tiny i18n renderer + viewport-based lazy loading. No framework, no build.
 *
 * i18n: fills [data-i18n] text, [data-i18n-meta] content, [data-i18n-src] and
 *       [data-i18n-alt] image attributes, [data-i18n-list] lists, [data-link]
 *       hrefs from the active locale (dotted key paths). Language persists in localStorage
 *       and honors ?lang=.
 * Lazy: images use native loading="lazy"; the (heavy) video's source is attached
 *       only when it scrolls near the viewport (IntersectionObserver).
 */
(function () {
  "use strict";

  var C = window.SITE_CONTENT;
  if (!C) return;

  var SUPPORTED = C.meta.languages;
  var DEFAULT = C.meta.defaultLang;

  function resolve(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] != null ? acc[key] : null;
    }, obj);
  }

  function pickLang() {
    var fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl && SUPPORTED.indexOf(fromUrl) !== -1) return fromUrl;
    var saved = localStorage.getItem("lang");
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    var browser = (navigator.language || "").slice(0, 2);
    if (SUPPORTED.indexOf(browser) !== -1) return browser;
    return DEFAULT;
  }

  function apply(lang) {
    var dict = C[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = resolve(dict, el.getAttribute("data-i18n"));
      if (val != null) el.textContent = val;
    });

    // Rich text (author-controlled content only — safe to inject as HTML).
    // Lets the narrative carry inline emphasis and links.
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var val = resolve(dict, el.getAttribute("data-i18n-html"));
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll("[data-i18n-meta]").forEach(function (el) {
      var val = resolve(dict, el.getAttribute("data-i18n-meta"));
      if (val != null) el.setAttribute("content", val);
    });
    if (dict.seo && dict.seo.title) document.title = dict.seo.title;

    // Lists written in content.js as arrays of plain strings.
    document.querySelectorAll("[data-i18n-list]").forEach(function (ul) {
      var items = resolve(dict, ul.getAttribute("data-i18n-list")) || [];
      ul.textContent = "";
      items.forEach(function (text) {
        var li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
      });
    });

    // Locale-specific images (e.g. the book edition in that language).
    document.querySelectorAll("[data-i18n-src]").forEach(function (el) {
      var val = resolve(dict, el.getAttribute("data-i18n-src"));
      if (val != null) el.setAttribute("src", val);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var val = resolve(dict, el.getAttribute("data-i18n-alt"));
      if (val != null) el.setAttribute("alt", val);
    });

    document.querySelectorAll("[data-link]").forEach(function (el) {
      var key = el.getAttribute("data-link");
      var href = (dict.links && dict.links[key]) || (C.links && C.links[key]);
      if (!href) return;
      el.setAttribute("href", href);
      // Links that leave the site open in a new tab, so the site stays open.
      if (/^https?:/.test(href)) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    });

    document.querySelectorAll(".lang [data-lang]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    renderBooks();
    renderCarousels(dict, lang);
    renderCredentials(dict);
    fillList("experience-list", dict.experience && dict.experience.items, function (it) {
      var li = document.createElement("li");
      var p = document.createElement("span");
      p.className = "edu-year";
      p.textContent = it.period;
      var l = document.createElement("span");
      l.className = "edu-label";
      l.textContent = it.label;
      li.appendChild(p);
      li.appendChild(l);
      return li;
    });
    fillList("cpd-list", dict.cpd && dict.cpd.items, function (it) {
      var li = document.createElement("li");
      var y = document.createElement("span");
      y.className = "edu-year";
      y.textContent = it.year;
      var l = document.createElement("span");
      l.className = "edu-label";
      l.textContent = it.label;
      li.appendChild(y);
      li.appendChild(l);
      return li;
    });
    fillList("teaching-list", dict.teaching && dict.teaching.items, function (t) {
      var li = document.createElement("li");
      li.textContent = t;
      return li;
    });
    fillList("sports-list", dict.sports && dict.sports.items, function (t) {
      var li = document.createElement("li");
      li.textContent = t;
      return li;
    });
    localStorage.setItem("lang", lang);
  }

  // Click-to-play facade: the heavy video downloads ONLY when the poster is
  // clicked (better than loading on scroll for a big file).
  function setupVideoFacades() {
    document.querySelectorAll(".video-facade").forEach(function (facade) {
      facade.addEventListener("click", function () {
        var src = facade.getAttribute("data-video");
        if (!src) return;
        var video = document.createElement("video");
        video.className = "facade-video";
        video.setAttribute("controls", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("autoplay", "");
        var source = document.createElement("source");
        source.src = src;
        source.type = "video/mp4";
        video.appendChild(source);
        facade.replaceWith(video);
        video.load();
        var playing = video.play();
        if (playing && playing.catch) playing.catch(function () {});
      });
    });
  }

  // Build the "textbooks studied" list; hide the whole section until we have titles.
  function renderBooks() {
    var ul = document.getElementById("books-list");
    var section = document.getElementById("books");
    if (!ul) return;
    var items = C.studyBooks || [];
    if (!items.length) {
      if (section) section.hidden = true;
      return;
    }
    if (section) section.hidden = false;
    ul.innerHTML = "";
    items.forEach(function (title) {
      var li = document.createElement("li");
      li.textContent = title;
      ul.appendChild(li);
    });
  }

  // Generic list filler: build() returns the <li> for each item.
  function fillList(id, items, build) {
    var ul = document.getElementById(id);
    if (!ul) return;
    ul.innerHTML = "";
    (items || []).forEach(function (it) {
      ul.appendChild(build(it));
    });
  }

  // Build the education & qualifications timeline (locale-specific).
  function renderCredentials(dict) {
    var ul = document.getElementById("education-list");
    if (!ul) return;
    ul.innerHTML = "";
    var items = (dict.credentials && dict.credentials.items) || [];
    items.forEach(function (it) {
      var li = document.createElement("li");
      var year = document.createElement("span");
      year.className = "edu-year";
      year.textContent = it.year;
      var label = document.createElement("span");
      label.className = "edu-label";
      label.textContent = it.label;
      li.appendChild(year);
      li.appendChild(label);
      ul.appendChild(li);
    });
  }

  // Sidebar: light up the link of the section that has reached 40% of the
  // screen height. Sections sitting side by side light up together, and the
  // last link lights up once the page is scrolled to the bottom.
  function setupSideNav() {
    var items = Array.prototype.slice.call(document.querySelectorAll(".side-nav a[href^='#']"))
      .map(function (a) { return { a: a, el: document.getElementById(a.getAttribute("href").slice(1)) }; })
      .filter(function (x) { return x.el; });
    if (!items.length) return;
    var pending = false;
    function update() {
      pending = false;
      var line = window.innerHeight * 0.4;
      var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      var current = items[0];
      items.forEach(function (x) { if (x.el.getBoundingClientRect().top <= line) current = x; });
      if (atBottom) current = items[items.length - 1];
      var top = current.el.getBoundingClientRect().top;
      items.forEach(function (x) {
        x.a.classList.toggle("is-active", Math.abs(x.el.getBoundingClientRect().top - top) < 2);
      });
    }
    window.addEventListener("scroll", function () {
      if (!pending) { pending = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  // ---- Photo carousel + lightbox ----
  // A [data-carousel="key"] box shows C[key] (a list of {src, it, en}) as a
  // row of slides that scrolls sideways (swipe on touch, arrows otherwise).
  // Clicking a slide opens it full screen in the lightbox, which has its own
  // arrows, keyboard (Esc, left, right) and swipe.
  function slideIndex(track) {
    return Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
  }

  function updateCount(box) {
    var track = box.querySelector(".carousel-track");
    var count = box.querySelector(".carousel-count");
    var n = track.children.length;
    if (count && n) count.textContent = (Math.min(slideIndex(track), n - 1) + 1) + " / " + n;
  }

  function renderCarousels(dict, lang) {
    var ui = dict.ui || {};
    document.querySelectorAll("[data-carousel]").forEach(function (box) {
      var photos = C[box.getAttribute("data-carousel")] || [];
      var track = box.querySelector(".carousel-track");
      var keep = slideIndex(track);
      track.textContent = "";
      photos.forEach(function (p, i) {
        var slide = document.createElement("button");
        slide.type = "button";
        slide.className = "carousel-slide";
        slide.setAttribute("aria-label", (ui.enlarge || "") + ": " + (p[lang] || ""));
        var img = document.createElement("img");
        img.src = p.src;
        img.alt = p[lang] || "";
        img.loading = i === 0 ? "eager" : "lazy";
        img.decoding = "async";
        slide.appendChild(img);
        slide.addEventListener("click", function () { openLightbox(photos, i, lang, ui, box); });
        track.appendChild(slide);
      });
      box.setAttribute("aria-label", ui.photos || "");
      box.querySelector(".carousel-prev").setAttribute("aria-label", ui.prev || "");
      box.querySelector(".carousel-next").setAttribute("aria-label", ui.next || "");
      track.scrollLeft = keep * track.clientWidth;
      updateCount(box);
    });
  }

  function setupCarousels() {
    document.querySelectorAll("[data-carousel]").forEach(function (box) {
      var track = box.querySelector(".carousel-track");
      box.querySelectorAll(".carousel-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var n = track.children.length;
          var next = (slideIndex(track) + Number(btn.getAttribute("data-dir")) + n) % n;
          track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
        });
      });
      var pending = false;
      track.addEventListener("scroll", function () {
        if (pending) return;
        pending = true;
        window.requestAnimationFrame(function () { pending = false; updateCount(box); });
      }, { passive: true });
    });
  }

  var lb = null;

  function buildLightbox() {
    var el = document.createElement("div");
    el.className = "lightbox";
    el.hidden = true;
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.innerHTML =
      '<figure class="lightbox-figure"><img alt="" /><figcaption></figcaption></figure>' +
      '<button type="button" class="lightbox-btn lightbox-close"><span aria-hidden="true">&times;</span></button>' +
      '<button type="button" class="lightbox-btn lightbox-prev"><span aria-hidden="true">&lsaquo;</span></button>' +
      '<button type="button" class="lightbox-btn lightbox-next"><span aria-hidden="true">&rsaquo;</span></button>' +
      '<span class="lightbox-count"></span>';
    document.body.appendChild(el);
    lb = { el: el, img: el.querySelector("img"), cap: el.querySelector("figcaption"), count: el.querySelector(".lightbox-count"), photos: [], i: 0, lang: "it", box: null, opener: null };
    el.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    el.querySelector(".lightbox-prev").addEventListener("click", function () { stepLightbox(-1); });
    el.querySelector(".lightbox-next").addEventListener("click", function () { stepLightbox(1); });
    el.addEventListener("click", function (e) { if (e.target === el) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (el.hidden) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") stepLightbox(-1);
      else if (e.key === "ArrowRight") stepLightbox(1);
    });
    var x0 = null;
    el.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    el.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 50) stepLightbox(dx < 0 ? 1 : -1);
    });
  }

  function showLightbox() {
    var p = lb.photos[lb.i];
    lb.img.src = p.src;
    lb.img.alt = p[lb.lang] || "";
    lb.cap.textContent = p[lb.lang] || "";
    lb.count.textContent = (lb.i + 1) + " / " + lb.photos.length;
  }

  function openLightbox(photos, i, lang, ui, box) {
    if (!lb) buildLightbox();
    lb.photos = photos; lb.i = i; lb.lang = lang; lb.box = box; lb.opener = document.activeElement;
    lb.el.setAttribute("aria-label", ui.photos || "");
    lb.el.querySelector(".lightbox-close").setAttribute("aria-label", ui.close || "");
    lb.el.querySelector(".lightbox-prev").setAttribute("aria-label", ui.prev || "");
    lb.el.querySelector(".lightbox-next").setAttribute("aria-label", ui.next || "");
    showLightbox();
    lb.el.hidden = false;
    document.documentElement.classList.add("lightbox-open");
    lb.el.querySelector(".lightbox-close").focus();
  }

  function stepLightbox(dir) {
    var n = lb.photos.length;
    lb.i = (lb.i + dir + n) % n;
    showLightbox();
  }

  function closeLightbox() {
    lb.el.hidden = true;
    document.documentElement.classList.remove("lightbox-open");
    // Leave the carousel on the photo the visitor stopped at.
    if (lb.box) {
      var track = lb.box.querySelector(".carousel-track");
      track.scrollLeft = lb.i * track.clientWidth;
      updateCount(lb.box);
      var slide = track.children[lb.i];
      if (slide) slide.focus({ preventScroll: true });
    } else if (lb.opener) {
      lb.opener.focus();
    }
  }

  function init() {
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Contact email (locale-independent), assembled here from [user, domain]
    // so the full address never appears in the page source. See content.js.
    var parts = C.links && C.links.email;
    if (parts && parts.length === 2) {
      var address = parts[0] + String.fromCharCode(64) + parts[1];
      ["contact-email", "contact-address"].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.setAttribute("href", "mailto:" + address);
      });
      var addressEl = document.getElementById("contact-address");
      if (addressEl) addressEl.textContent = address;
    }

    document.querySelectorAll(".lang [data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.getAttribute("data-lang"));
      });
    });

    apply(pickLang());
    setupVideoFacades();
    setupSideNav();
    setupCarousels();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
