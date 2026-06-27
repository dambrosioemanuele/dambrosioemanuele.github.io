/*
 * Tiny i18n renderer + viewport-based lazy loading. No framework, no build.
 *
 * i18n: fills [data-i18n] text, [data-i18n-meta] content, [data-link] hrefs from
 *       the active locale (dotted key paths). Language persists in localStorage
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

    document.querySelectorAll("[data-i18n-meta]").forEach(function (el) {
      var val = resolve(dict, el.getAttribute("data-i18n-meta"));
      if (val != null) el.setAttribute("content", val);
    });
    if (dict.seo && dict.seo.title) document.title = dict.seo.title;

    document.querySelectorAll("[data-link]").forEach(function (el) {
      var href = C.links && C.links[el.getAttribute("data-link")];
      if (href) el.setAttribute("href", href);
    });

    document.querySelectorAll(".lang [data-lang]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    renderBooks();
    renderCredentials(dict);
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

  function init() {
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Contact email (locale-independent).
    var emailEl = document.getElementById("contact-email");
    if (emailEl && C.links && C.links.email) {
      emailEl.setAttribute("href", "mailto:" + C.links.email);
    }

    document.querySelectorAll(".lang [data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.getAttribute("data-lang"));
      });
    });

    apply(pickLang());
    setupVideoFacades();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
