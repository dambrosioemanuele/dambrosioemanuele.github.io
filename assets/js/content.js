/*
 * SINGLE SOURCE OF CONTENT, both locales. Italian (it) is primary; English (en)
 * mirrors it. Editing this file is how the site grows — small, reviewable diffs.
 * Keep the two locales structurally identical (same keys).
 */
window.SITE_CONTENT = {
  meta: { defaultLang: "it", languages: ["it", "en"], domain: "emanueledambrosio.com" },

  // Locale-independent.
  links: { book: "https://calzetti-mariucci.it/prodotto/le-espressioni-della-forza", email: "sportformazione@libero.it" },

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
      kicker: "Competenze",
      title: "Ambiti di competenza",
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
    experience: {
      kicker: "Esperienza",
      title: "Percorso professionale",
      items: [
        { period: "2019 – oggi", label: "Gestore dello Sporting Club Antares (Gela) — personal trainer, massofisioterapista, preparatore atletico" },
        { period: "2019", label: "Preparatore atletico — Gela Calcio (prima categoria)" },
        { period: "2018 – 2019", label: "Personal trainer e massofisioterapista — centro Olilab (Gela)" },
        { period: "2017 – 2018", label: "Massofisioterapista — Fisioterapik Center (Gela)" },
        { period: "2015 – 2017", label: "Personal trainer e istruttore di pugilato — Club Vitality / Antares (Gela)" },
        { period: "2011 – 2014", label: "Libero professionista, chinesiologo — studio di chinesiologia (Francavilla Fontana)" },
        { period: "2008 – 2011", label: "Istruttore fitness e pugilato, personal trainer (Francavilla Fontana, Lecce)" },
      ],
    },
    teaching: {
      kicker: "Docenza",
      title: "Docenza & relatore",
      items: [
        "Docente Formatore Regionale FPI (Federazione Pugilistica Italiana), dal 2011",
        "Docente formatore in corsi per la qualifica CONI di personal trainer (Gela, La Spezia, 2016)",
        "Docente formatore nel corso per preparatore atletico negli sport da combattimento (La Spezia, 2016)",
        "Organizzatore e docente — corso per istruttori di functional training (Antares, Gela, 2017)",
        "Relatore al seminario «La forza e le sue espressioni»: monitoraggio e allenamento con il PerfecTraining (Pegaso Università Telematica, 2020)",
        "Relatore nelle presentazioni del dispositivo PerfecTraining in tutta Italia (Perugia, Catania, Jesi, La Spezia, Pontecagnano, centro nazionale FPI)",
        "Docente di metodologia dell'allenamento — corso per aspiranti tecnici FPI (Bari, 2014)",
        "Co-relatore al corso tecnico FPI sulla boxe femminile (Gallipoli, 2013)",
      ],
    },
    cpd: {
      kicker: "Formazione continua",
      title: "Seminari & aggiornamento",
      items: [
        { year: "2015", label: "BLSD — Basic Life Support & Defibrillation" },
        { year: "2014", label: "«La lombalgia: nuovo approccio alla decompressione dei dischi intervertebrali» (UNC)" },
        { year: "2011", label: "VII Seminario FPI «La boxe femminile» — Assisi" },
        { year: "2010", label: "VI Seminario FPI «L'incremento della forza nell'età giovanile» — Assisi" },
        { year: "2010", label: "FIPCF «Valutazione funzionale e postura» — Lecce" },
        { year: "2009", label: "FPI «Match Analysis — Mondiali Milano 2009» — Assisi" },
        { year: "2007", label: "FIPCF «Il carico motorio e gli adattamenti fisiologici» — Bari" },
      ],
    },
    sports: {
      kicker: "Sport",
      title: "Sport praticati a livello agonistico",
      items: ["Pugilato", "Atletica leggera — salto in alto, getto del peso, 4×100, mezzofondo", "Pallacanestro"],
    },
    book: {
      kicker: "Il libro",
      title: "«Le Espressioni della Forza»",
      text: "Il mio libro, edito da Calzetti & Mariucci: un percorso sulla forza e sulle sue espressioni, dalla teoria all'applicazione pratica.",
      publisher: "Edito da",
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
      title: "Collaborazioni e progetti",
      text: "Per collaborazioni professionali, docenza, formazione e progetti.",
      location: "Sporting Club Antares — Gela (CL)",
      emailLabel: "Contattami",
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
      kicker: "Expertise",
      title: "Areas of expertise",
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
    experience: {
      kicker: "Experience",
      title: "Professional path",
      items: [
        { period: "2019 – now", label: "Manager of the Antares Sporting Club (Gela) — personal trainer, physical therapist, athletic coach" },
        { period: "2019", label: "Athletic coach — Gela Calcio (first division, amateur)" },
        { period: "2018 – 2019", label: "Personal trainer and physical therapist — Olilab center (Gela)" },
        { period: "2017 – 2018", label: "Physical therapist — Fisioterapik Center (Gela)" },
        { period: "2015 – 2017", label: "Personal trainer and boxing instructor — Club Vitality / Antares (Gela)" },
        { period: "2011 – 2014", label: "Self-employed kinesiologist — kinesiology practice (Francavilla Fontana)" },
        { period: "2008 – 2011", label: "Fitness and boxing instructor, personal trainer (Francavilla Fontana, Lecce)" },
      ],
    },
    teaching: {
      kicker: "Teaching",
      title: "Teaching & speaking",
      items: [
        "Regional Trainer-Educator, FPI (Italian Boxing Federation), since 2011",
        "Educator in CONI certification courses for personal trainers (Gela, La Spezia, 2016)",
        "Educator in the course for combat-sports athletic coaches (La Spezia, 2016)",
        "Organiser and educator — functional-training instructor course (Antares, Gela, 2017)",
        "Speaker at the seminar «Strength and its expressions»: monitoring and training with PerfecTraining (Pegaso Telematic University, 2020)",
        "Speaker at PerfecTraining device presentations across Italy (Perugia, Catania, Jesi, La Spezia, Pontecagnano, FPI national centre)",
        "Lecturer in training methodology — course for aspiring FPI coaches (Bari, 2014)",
        "Co-speaker at the FPI technical course on women's boxing (Gallipoli, 2013)",
      ],
    },
    cpd: {
      kicker: "Continuing education",
      title: "Seminars & professional updates",
      items: [
        { year: "2015", label: "BLSD — Basic Life Support & Defibrillation" },
        { year: "2014", label: "«Low back pain: a new approach to intervertebral disc decompression» (UNC)" },
        { year: "2011", label: "7th FPI seminar «Women's boxing» — Assisi" },
        { year: "2010", label: "6th FPI seminar «Building strength in youth» — Assisi" },
        { year: "2010", label: "FIPCF «Functional assessment and posture» — Lecce" },
        { year: "2009", label: "FPI «Match Analysis — Milan 2009 World Championships» — Assisi" },
        { year: "2007", label: "FIPCF «Motor load and physiological adaptations» — Bari" },
      ],
    },
    sports: {
      kicker: "Sports",
      title: "Competitive sports",
      items: ["Boxing", "Athletics — high jump, shot put, 4×100, middle-distance", "Basketball"],
    },
    book: {
      kicker: "The book",
      title: "«Le Espressioni della Forza»",
      text: "My book, published by Calzetti & Mariucci: a journey through strength and its expressions, from theory to practical application.",
      publisher: "Published by",
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
      title: "Collaborations & projects",
      text: "For professional collaborations, teaching, education and projects.",
      location: "Antares Sporting Club — Gela (CL), Italy",
      emailLabel: "Get in touch",
    },
    footer: { note: "Site being updated." },
  },
};
