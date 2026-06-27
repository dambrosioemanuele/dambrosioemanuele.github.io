/*
 * SINGLE SOURCE OF CONTENT for the site, in both locales.
 *
 * This is intentionally sparse for now ("quasi vuoto") — real content arrives
 * from Emanuele via the Telegram bot and gets filled in here. Editing this file
 * is how the site grows: small, reviewable diffs, no markup changes.
 *
 * Italian (it) is primary; English (en) mirrors it (translated from Emanuele's
 * Italian input). Keep the two locales structurally identical.
 */
window.SITE_CONTENT = {
  meta: {
    defaultLang: "it",
    languages: ["it", "en"],
    domain: "emanueledambrosio.com",
  },

  it: {
    seo: {
      title: "Emanuele D'Ambrosio",
      description:
        "Sito ufficiale di Emanuele D'Ambrosio — autore di «Le Espressioni della Forza».",
    },
    hero: {
      eyebrow: "Forza · Coaching · Formazione",
      name: "Emanuele D'Ambrosio",
      tagline: "Autore di «Le Espressioni della Forza».",
      intro:
        "Sito in costruzione. Presto: biografia, risultati, il libro, coaching e corsi.",
      ctaBook: "Il libro",
    },
    footer: {
      note: "Sito in aggiornamento.",
    },
    nav: {
      langLabel: "Lingua",
    },
  },

  en: {
    seo: {
      title: "Emanuele D'Ambrosio",
      description:
        "Official site of Emanuele D'Ambrosio — author of «Le Espressioni della Forza».",
    },
    hero: {
      eyebrow: "Strength · Coaching · Education",
      name: "Emanuele D'Ambrosio",
      tagline: "Author of «Le Espressioni della Forza».",
      intro:
        "Site under construction. Coming soon: biography, results, the book, coaching and courses.",
      ctaBook: "The book",
    },
    footer: {
      note: "Site being updated.",
    },
    nav: {
      langLabel: "Language",
    },
  },

  // Shared (locale-independent) values.
  links: {
    book: "https://bodygon.com/products/book",
  },
};
