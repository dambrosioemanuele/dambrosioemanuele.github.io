/*
 * SINGLE SOURCE OF CONTENT, both locales. Italian (it) is primary; English (en)
 * mirrors it. Editing this file is how the site grows — small, reviewable diffs.
 * Keep the two locales structurally identical (same keys).
 *
 * NOTE: `story.*` and a few other fields contain trusted inline HTML (rendered
 * via [data-i18n-html]). Only author-controlled markup lives here.
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
      p1: "Sono Emanuele d'Ambrosio, laureato in Scienze delle Attività Motorie e Sportive all'Università di Urbino «Carlo Bo». Studio la forza e le sue espressioni da oltre vent'anni: dalla tesi di laurea al libro, dalla ricerca al lavoro quotidiano sul campo.",
      p2: "Chinesiologo e massofisioterapista, gestisco lo Sporting Club Antares a Gela, dove seguo atleti e persone come personal trainer e preparatore atletico per ogni disciplina — dagli sport da combattimento al calcio.",
      h1: "Laurea in Scienze Motorie (Urbino)",
      h2: "Chinesiologo · Massofisioterapista",
      h3: "Inventore del dispositivo PerfecTraining, evoluto in",
      h4: "Docente formatore CONI · FPI",
    },
    story: {
      kicker: "Il percorso",
      title: "Dalla tesi al metodo",
      lead:
        "Prima di essere un libro, «Le Espressioni della Forza» è stata una domanda. Una domanda nata sul ring e portata all'università, che ho continuato a inseguire per vent'anni — dalla ricerca alla federazione, dalla riabilitazione fino all'invenzione di un dispositivo.",
      capThesis:
        "La mia tesi di laurea in Scienze Motorie, Urbino. Non un punto di arrivo, ma il trampolino della mia vita professionale.",
      p1:
        "Nel 2009 mi laureo in Scienze Motorie all'Università di Urbino «Carlo Bo» con una tesi dal titolo <em>«La forza e le sue espressioni nel pugilato dilettantistico»</em>. Relatore è <strong>Nicola Silvaggi</strong>, all'epoca commissario tecnico della FIDAL e allenatore di <strong>Nicola Vizzoni</strong>, argento olimpico a Sydney 2000 nel lancio del martello: uno dei massimi esperti italiani di condizionamento della forza muscolare. Studiare la forza sotto la sua guida ha dato metodo scientifico a un'intuizione che avevo maturato allenandomi e allenando.",
      capSilvaggi: "Con il prof. Nicola Silvaggi dopo la discussione della tesi. Urbino, 2009.",
      quote:
        "Il titolo di quella tesi — <em>la forza e le sue espressioni</em> — è diventato, anni dopo, il titolo del mio libro.",
      h2: "Il riconoscimento della federazione",
      p2:
        "Nel 2011 il mio contributo sulla metodologia dell'allenamento viene pubblicato sul sito ufficiale della <strong>Federazione Pugilistica Italiana</strong> come apporto innovativo. Dopo averne verificato di persona il valore didattico e scientifico, <strong>Massimo Sciotti</strong> — allora responsabile della formazione dei tecnici nazionali — dispone l'inserimento del mio nome nell'elenco dei formatori regionali FPI, per i comitati di Puglia e Basilicata, nella materia metodologia dell'allenamento.",
      h3: "Sul palco, tra i relatori",
      p3:
        "Nel 2012, durante un raduno collegiale della FPI a Gallipoli, vengo chiamato come relatore insieme a <strong>Emanuele Renzini</strong>, all'epoca allenatore della nazionale femminile di pugilato, per un seminario dedicato all'allenamento della forza nel pugilato femminile.",
      capGallipoli: "Intervista dopo il seminario. Gallipoli, 2012.",
      h4: "Dalla prestazione alla riabilitazione",
      p4:
        "La forza non vive senza la salute del movimento. Nel 2012 conseguo all'Università «G. D'Annunzio» di Chieti-Pescara il perfezionamento universitario in <em>riatletizzazione motoria nella riabilitazione sportiva</em>, sotto la direzione del prof. Raul Saggini, alla Facoltà di Medicina e Chirurgia. Tra il 2014 e il 2018 completo questo percorso qualificandomi come massoterapista, idroterapista e infine massofisioterapista presso l'agenzia formativa Athena, in Molise.",
      h5: "Dall'intuizione al brevetto",
      p5:
        "Nel 2016 comincia la strada che porta allo sviluppo del dispositivo <strong>PerfecTraining</strong> — evolutosi nell'attuale <a class='hl-link' href='https://bodygon.com' target='_blank' rel='noopener noreferrer'>Bodygon</a> — e ai relativi brevetti. È il punto in cui lo studio della forza diventa uno strumento, e vent'anni di campo diventano tecnologia.",
    },
    credentials: {
      kicker: "Formazione",
      title: "Formazione & qualifiche",
      items: [
        { year: "2009", label: "Laurea in Scienze delle Attività Motorie e Sportive — Università di Urbino «Carlo Bo» (tesi sulla forza nel pugilato, relatore N. Silvaggi)" },
        { year: "2012", label: "Perfezionamento universitario «Riatletizzazione motoria nella riabilitazione sportiva» — «G. D'Annunzio» Chieti-Pescara (dir. R. Saggini)" },
        { year: "2018", label: "Diploma di massofisioterapista (L. 403/71) — agenzia formativa Athena, Molise" },
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
        "Relatore, con Emanuele Renzini (all. nazionale femminile), al seminario FPI sull'allenamento della forza nel pugilato femminile (Gallipoli, 2012)",
        "Docente di metodologia dell'allenamento — corso per aspiranti tecnici FPI (Bari, 2014)",
        "Docente formatore in corsi per la qualifica CONI di personal trainer (Gela, La Spezia, 2016)",
        "Docente formatore nel corso per preparatore atletico negli sport da combattimento (La Spezia, 2016)",
        "Organizzatore e docente — corso per istruttori di functional training (Antares, Gela, 2017)",
        "Relatore al seminario «La forza e le sue espressioni»: monitoraggio e allenamento con il PerfecTraining (Pegaso Università Telematica, 2020)",
        "Relatore nelle presentazioni del dispositivo PerfecTraining in tutta Italia (Perugia, Catania, Jesi, La Spezia, Pontecagnano, centro nazionale FPI)",
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
      captionDedication: "La dedica di Bill Parisi sulla sua «Anatomia della Velocità» (Calzetti & Mariucci).",
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
      p1: "I'm Emanuele d'Ambrosio, a graduate in Sport and Movement Sciences from the University of Urbino «Carlo Bo». I've studied strength and its expressions for over twenty years: from my degree thesis to my book, from research to daily work in the field.",
      p2: "Kinesiologist and physical therapist, I run the Antares Sporting Club in Gela, where I coach athletes and people as a personal trainer and athletic coach across every discipline — from combat sports to football.",
      h1: "Sport Science degree (Urbino)",
      h2: "Kinesiologist · Physical therapist",
      h3: "Inventor of the PerfecTraining device, evolved into",
      h4: "CONI · FPI educator / trainer",
    },
    story: {
      kicker: "The journey",
      title: "From thesis to method",
      lead:
        "Before it was a book, «Le Espressioni della Forza» was a question. A question born in the ring and taken to university, one I kept chasing for twenty years — from research to the federation, from rehabilitation all the way to inventing a device.",
      capThesis:
        "My degree thesis in Sport Science, Urbino. Not a finish line, but the springboard of my professional life.",
      p1:
        "In 2009 I graduated in Sport and Movement Sciences at the University of Urbino «Carlo Bo» with a thesis titled <em>«Strength and its expressions in amateur boxing»</em>. My supervisor was <strong>Nicola Silvaggi</strong>, at the time head coach of the Italian Athletics Federation (FIDAL) and coach of <strong>Nicola Vizzoni</strong>, Olympic silver medallist in the hammer throw at Sydney 2000 — one of Italy's foremost experts in muscular strength conditioning. Studying strength under his guidance gave scientific method to an intuition I had formed by training, and by coaching.",
      capSilvaggi: "With Prof. Nicola Silvaggi after defending my thesis. Urbino, 2009.",
      quote:
        "The title of that thesis — <em>strength and its expressions</em> — became, years later, the title of my book.",
      h2: "Recognised by the federation",
      p2:
        "In 2011 my contribution on training methodology was published on the official website of the <strong>Italian Boxing Federation</strong> (FPI) as an innovative one. After personally verifying its educational and scientific value, <strong>Massimo Sciotti</strong> — then head of national coach education — added my name to the roster of FPI regional trainers, for the Puglia and Basilicata committees, in the field of training methodology.",
      h3: "On stage, among the speakers",
      p3:
        "In 2012, during an FPI training camp in Gallipoli, I was invited to speak alongside <strong>Emanuele Renzini</strong>, at the time coach of the women's national boxing team, for a seminar on strength training in women's boxing.",
      capGallipoli: "Interviewed after the seminar. Gallipoli, 2012.",
      h4: "From performance to rehabilitation",
      p4:
        "Strength cannot live without healthy movement. In 2012 I earned a university specialization in <em>motor re-athletization for sports rehabilitation</em> at the «G. D'Annunzio» University of Chieti-Pescara, under Prof. Raul Saggini, at the Faculty of Medicine and Surgery. Between 2014 and 2018 I completed this path, qualifying as a massage therapist, hydrotherapist and finally physical therapist at the Athena training agency, in Molise.",
      h5: "From intuition to patent",
      p5:
        "In 2016 began the road that led to the <strong>PerfecTraining</strong> device — which evolved into today's <a class='hl-link' href='https://bodygon.com' target='_blank' rel='noopener noreferrer'>Bodygon</a> — and its patents. It is the point where the study of strength became a tool, and twenty years in the field became technology.",
    },
    credentials: {
      kicker: "Education",
      title: "Education & qualifications",
      items: [
        { year: "2009", label: "Degree in Sport and Movement Sciences — University of Urbino «Carlo Bo» (thesis on strength in boxing, supervisor N. Silvaggi)" },
        { year: "2012", label: "University specialization in motor re-athletization for sports rehabilitation — «G. D'Annunzio» Chieti-Pescara (dir. R. Saggini)" },
        { year: "2018", label: "Physical therapist diploma (It. Law 403/71) — Athena training agency, Molise" },
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
        "Speaker, with Emanuele Renzini (women's national team coach), at the FPI seminar on strength training in women's boxing (Gallipoli, 2012)",
        "Lecturer in training methodology — course for aspiring FPI coaches (Bari, 2014)",
        "Educator in CONI certification courses for personal trainers (Gela, La Spezia, 2016)",
        "Educator in the course for combat-sports athletic coaches (La Spezia, 2016)",
        "Organiser and educator — functional-training instructor course (Antares, Gela, 2017)",
        "Speaker at the seminar «Strength and its expressions»: monitoring and training with PerfecTraining (Pegaso Telematic University, 2020)",
        "Speaker at PerfecTraining device presentations across Italy (Perugia, Catania, Jesi, La Spezia, Pontecagnano, FPI national centre)",
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
      captionDedication: "Bill Parisi's dedication in his «Anatomy of Speed» (Calzetti & Mariucci).",
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
