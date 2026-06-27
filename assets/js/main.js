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

    localStorage.setItem("lang", lang);
  }

  // Attach the video source only when it nears the viewport.
  function setupLazyVideo() {
    var videos = document.querySelectorAll("video.lazy-video");
    if (!videos.length) return;

    function load(video) {
      video.querySelectorAll("source[data-src]").forEach(function (s) {
        s.src = s.getAttribute("data-src");
        s.removeAttribute("data-src");
      });
      video.load();
    }

    if (!("IntersectionObserver" in window)) {
      // Old browsers: just load them.
      videos.forEach(load);
      return;
    }

    var io = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            load(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "300px 0px" } // start a bit before it's actually visible
    );
    videos.forEach(function (v) {
      io.observe(v);
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
    setupLazyVideo();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
