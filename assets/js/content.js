/*
 * SINGLE SOURCE OF CONTENT, both locales. Italian (it) is primary; English (en)
 * mirrors it. Editing this file is how the site grows — small, reviewable diffs.
 * Keep the two locales structurally identical (same keys).
 */
window.SITE_CONTENT = {
  meta: { defaultLang: "it", languages: ["it", "en"], domain: "emanueledambrosio.com" },

  // Locale-independent.
  links: { book: "https://bodygon.com/products/book", email: "sportformazione@libero.it" },

  // Textbooks Emanuele studied — locale-independent titles. Fill from his list.
  studyBooks: [],

  it: {
    seo: {
      title: "Emanuele d'Ambrosio — forza, coaching, formazione",
      description:
        "Emanuele d'Ambrosio: chinesiologo, preparatore atletico e autore di «Le Espressioni della Forza». Coaching, preparazione atletica e formazione.",
    },
    nav: { langLabel: "Lingua" },
    hero: {
      eyebrow: "Chinesiologo · Preparatore atletico · Autore",
      name: "Emanuele d'Ambrosio",
      tagline: "Lo studio della forza, applicato sul campo.",
      intro:
        "Laurea in Scienze Motorie, chinesiologo e massofisioterapista. Dalla ricerca sulla forza — la mia tesi, poi diventata un libro — al lavoro quotidiano con atleti e persone.",
      ctaBook: "Il libro",
      ctaContact: "Contatti",
    },
    about: {
      kicker: "Chi sono",
      title: "Dalla teoria della forza alla pratica",
      p1: "Sono Emanuele d'Ambrosio, laureato in Scienze delle Attività Motorie e Sportive all'Università di Urbino. La mia tesi, «La forza e le sue espressioni nel pugilato», è il seme da cui è nato il libro «Le Espressioni della Forza».",
      p2: "Chinesiologo e massofisioterapista, gestisco lo Sporting Club Antares a Gela, dove seguo atleti e persone come personal trainer e preparatore atletico per ogni disciplina — dagli sport da combattimento al calcio.",
      h1: "Laurea in Scienze Motorie (Urbino)",
      h2: "Chinesiologo · Massofisioterapista",
      h3: "Inventore del dispositivo PerfecTraining, evoluto in",
      h4: "Docente formatore CONI · FPI",
    },
    credentials: {
      kicker: "Formazione",
      title: "Formazione & qualifiche",
      items: [
        { year: "2009", label: "Laurea in Scienze delle Attività Motorie e Sportive — Università di Urbino «Carlo Bo»" },
        { year: "2012", label: "Perfezionamento universitario «Riatletizzazione motoria nella riabilitazione sportiva» — Chieti-Pescara" },
        { year: "2018", label: "Diploma triennale di massofisioterapista (L. 403/71)" },
        { year: "—", label: "Chinesiologo professionista (L. 4/2013, UNC n°10972)" },
        { year: "2006", label: "Abilitazione CONI a consulente di educazione motoria per la scuola primaria" },
        { year: "2005", label: "Insegnante tecnico-allenatore FIPCF / FIPE (pesistica)" },
        { year: "2011", label: "Docente Formatore Regionale FPI (Federazione Pugilistica Italiana)" },
        { year: "2016", label: "Brevetto del dispositivo PerfecTraining (poi Bodygon)" },
      ],
    },
    services: {
      kicker: "Cosa faccio",
      title: "Come posso aiutarti",
      s1t: "Coaching & preparazione atletica",
      s1d: "Programmazione e allenamento su misura per atleti e appassionati, in ogni disciplina.",
      s2t: "Chinesiologia & massofisioterapia",
      s2d: "Rieducazione funzionale e posturale, trattamento e benessere del movimento.",
      s3t: "Forza & sport da combattimento",
      s3d: "Sviluppo della forza e preparazione specifica per pugilato e sport da combattimento.",
      s4t: "Formazione & docenza",
      s4d: "Corsi e seminari per tecnici e personal trainer (CONI, FPI).",
    },
    books: {
      kicker: "Studi",
      title: "Libri di testo studiati",
      intro: "Alcuni dei testi su cui mi sono formato.",
      empty: "Elenco in arrivo.",
    },
    book: {
      kicker: "Il libro",
      title: "«Le Espressioni della Forza»",
      text: "Il mio libro, edito da Bodygon: un percorso sulla forza e sulle sue espressioni, dalla teoria all'applicazione pratica.",
      cta: "Scopri il libro",
    },
    news: {
      kicker: "Aggiornamenti",
      title: "In formazione continua",
      itemTitle: "Anatomy of Speed — certificazione Parisi",
      itemText:
        "In questi giorni partecipo al primo corso tenuto in Italia da Bill Parisi per la certificazione «Anatomy of Speed».",
      captionPhoto: "Bill Parisi — AoS 2, Live Certification Course.",
      captionVideo: "Un momento dal corso.",
    },
    contact: {
      kicker: "Contatti",
      title: "Lavoriamo insieme",
      text: "Per coaching, collaborazioni, corsi e formazione, scrivimi.",
      location: "Sporting Club Antares — Gela (CL)",
      emailLabel: "Scrivimi",
    },
    footer: { note: "Sito in aggiornamento." },
  },

  en: {
    seo: {
      title: "Emanuele d'Ambrosio — strength, coaching, education",
      description:
        "Emanuele d'Ambrosio: kinesiologist, athletic coach and author of «Le Espressioni della Forza». Coaching, athletic preparation and education.",
    },
    nav: { langLabel: "Language" },
    hero: {
      eyebrow: "Kinesiologist · Athletic coach · Author",
      name: "Emanuele d'Ambrosio",
      tagline: "The study of strength, applied in the field.",
      intro:
        "Sport-science graduate, kinesiologist and physical therapist. From research on strength — my thesis, later a book — to daily work with athletes and people.",
      ctaBook: "The book",
      ctaContact: "Contact",
    },
    about: {
      kicker: "About",
      title: "From the theory of strength to practice",
      p1: "I'm Emanuele d'Ambrosio, a graduate in Sport and Movement Sciences from the University of Urbino. My thesis, «Strength and its expressions in boxing», is the seed of the book «Le Espressioni della Forza».",
      p2: "Kinesiologist and physical therapist, I run the Antares Sporting Club in Gela, where I coach athletes and people as a personal trainer and athletic coach across every discipline — from combat sports to football.",
      h1: "Sport Science degree (Urbino)",
      h2: "Kinesiologist · Physical therapist",
      h3: "Inventor of the PerfecTraining device, evolved into",
      h4: "CONI · FPI educator / trainer",
    },
    credentials: {
      kicker: "Education",
      title: "Education & qualifications",
      items: [
        { year: "2009", label: "Degree in Sport and Movement Sciences — University of Urbino «Carlo Bo»" },
        { year: "2012", label: "University specialization in motor re-athletization for sports rehabilitation — Chieti-Pescara" },
        { year: "2018", label: "Three-year physical therapist diploma (It. Law 403/71)" },
        { year: "—", label: "Professional kinesiologist (It. Law 4/2013, UNC n°10972)" },
        { year: "2006", label: "CONI certification as movement-education consultant for primary school" },
        { year: "2005", label: "Technical coach certification — FIPCF / FIPE (weightlifting)" },
        { year: "2011", label: "Regional Trainer-Educator, FPI (Italian Boxing Federation)" },
        { year: "2016", label: "Patent for the PerfecTraining device (later Bodygon)" },
      ],
    },
    services: {
      kicker: "What I do",
      title: "How I can help",
      s1t: "Coaching & athletic preparation",
      s1d: "Tailored programming and training for athletes and enthusiasts, in any discipline.",
      s2t: "Kinesiology & physical therapy",
      s2d: "Functional and postural re-education, treatment and movement wellbeing.",
      s3t: "Strength & combat sports",
      s3d: "Strength development and specific preparation for boxing and combat sports.",
      s4t: "Education & teaching",
      s4d: "Courses and seminars for coaches and personal trainers (CONI, FPI).",
    },
    books: {
      kicker: "Studies",
      title: "Textbooks I studied",
      intro: "Some of the texts I trained on.",
      empty: "List coming soon.",
    },
    book: {
      kicker: "The book",
      title: "«Le Espressioni della Forza»",
      text: "My book, published by Bodygon: a journey through strength and its expressions, from theory to practical application.",
      cta: "Discover the book",
    },
    news: {
      kicker: "Updates",
      title: "Always learning",
      itemTitle: "Anatomy of Speed — Parisi certification",
      itemText:
        "These days I'm attending the first course held in Italy by Bill Parisi for the «Anatomy of Speed» certification.",
      captionPhoto: "Bill Parisi — AoS 2, Live Certification Course.",
      captionVideo: "A moment from the course.",
    },
    contact: {
      kicker: "Contact",
      title: "Let's work together",
      text: "For coaching, collaborations, courses and education, get in touch.",
      location: "Antares Sporting Club — Gela (CL), Italy",
      emailLabel: "Email me",
    },
    footer: { note: "Site being updated." },
  },
};
