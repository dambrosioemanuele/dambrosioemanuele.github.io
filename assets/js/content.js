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
      hUni: "Gli anni di Urbino",
      p0:
        "A Urbino non ho aspettato la laurea per cominciare. Già dal primo anno conseguo la qualifica tecnica federale con la <strong>FIPCF</strong> — oggi FIPE, la federazione italiana di pesistica — e, nello stesso periodo, il diploma in tecniche del massaggio. Nel 2006 arrivano la qualifica di istruttore giovanile e aspirante tecnico di pugilato con la <strong>Federazione Pugilistica Italiana</strong> e l'abilitazione come consulente di educazione motoria per la scuola primaria, tra la facoltà di Scienze Motorie e la Scuola Regionale dello Sport delle Marche. Sono anni in cui l'aula e la palestra procedono insieme: si studia, si insegna, si incontrano persone.",
      capMyers:
        "Urbino, durante un ciclo di seminari sulla pallacanestro: il piacere di conoscere il mitico Carlton Myers.",
      hThesis: "La tesi che è diventata un libro",
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
        "Nel 2013, durante un raduno collegiale della FPI a Gallipoli, vengo chiamato come relatore insieme a <strong>Emanuele Renzini</strong>, all'epoca allenatore della nazionale femminile di pugilato, per un seminario dedicato all'allenamento della forza nel pugilato femminile.",
      capGallipoliTalk: "Il mio intervento come formatore FPI al raduno di Gallipoli, 2013.",
      capGallipoli: "Intervista dopo il seminario. Gallipoli, 2013.",
      h4: "Dalla prestazione alla riabilitazione",
      p4:
        "La forza non vive senza la salute del movimento. Nel 2012 conseguo all'Università «G. D'Annunzio» di Chieti-Pescara il perfezionamento universitario in <em>riatletizzazione motoria nella riabilitazione sportiva</em>, sotto la direzione del prof. Raul Saggini, alla Facoltà di Medicina e Chirurgia. Tra il 2014 e il 2018 completo questo percorso qualificandomi come massoterapista, idroterapista e infine massofisioterapista presso l'agenzia formativa Athena, in Molise.",
      h5: "Dall'intuizione al brevetto",
      p5:
        "Nel 2016 comincia la strada che porta allo sviluppo del dispositivo <strong>PerfecTraining</strong> — evolutosi nell'attuale <a class='hl-link' href='https://bodygon.com' target='_blank' rel='noopener noreferrer'>Bodygon</a> — e ai relativi brevetti. È il punto in cui lo studio della forza diventa uno strumento, e vent'anni di campo diventano tecnologia.",
    },
    wins: {
      kicker: "Sul campo",
      title: "Atleti & squadre",
      lead:
        "La teoria vale quanto i risultati che produce. Questi sono alcuni dei percorsi che ho condiviso con atleti e squadre: un campionato vinto, un titolo professionistico, un ciclo di forza scritto a mano quasi vent'anni fa. Storie diverse, con dietro sempre la stessa domanda — come si costruisce una prestazione.",
      w1y: "Stagione 2025 / 2026",
      w1t: "Gela Basket: campionato vinto, promozione in Serie B",
      w1p:
        "Per l'intera stagione agonistica 2025-2026 ho seguito il <strong>Gela Basket</strong> dal punto di vista atletico, insieme al mio socio <strong>Carmelo Nuzzi</strong>. La squadra ha chiuso al primo posto il campionato siciliano di <strong>Serie C</strong> ed è stata promossa al campionato interregionale di <strong>Serie B</strong>. Dietro a una coppa c'è una stagione intera di lavoro quotidiano: preparazione, gestione dei carichi, prevenzione degli infortuni, recupero — dalla prima seduta di preparazione all'ultima partita.",
      w1cap: "Con Carmelo Nuzzi, al termine del campionato.",
      w1cap2: "FIP Sicilia — Campionato di Serie C, prima classificata, stagione 2025/2026.",
      w2y: "2020 – 2021",
      w2t: "Gianluca Pappalardo, campione delle Cinture Pro",
      w2p:
        "Con <strong>Gianluca Pappalardo</strong>, pugile professionista dei pesi medi, ho collaborato per la conquista del <strong>Trofeo delle Cinture Pro</strong> organizzato dalla Federazione Pugilistica Italiana. Gianluca ha vinto il titolo, e la scia di vittorie lo ha portato al <strong>secondo posto nel ranking italiano</strong> della sua categoria. Preparare un professionista vuol dire aggiungere forza senza togliere velocità: è esattamente la domanda da cui sono nati la mia tesi e, poi, il mio libro.",
      w2cap: "«Primo traguardo raggiunto insieme, uno dei tanti.»",
      w3y: "Gli inizi",
      w3t: "Il primo ciclo di forza, scritto a mano",
      w3p1:
        "Ero all'inizio della mia carriera e lavoravo in una palestra del mio paese, Francavilla Fontana. Due atleti di spicco del posto, <strong>Giacomo Leone</strong> e <strong>Ottavio Andriani</strong>, portavano spesso con sé amici e colleghi di livello internazionale: un giorno, nella mia sala attrezzi, ho avuto il piacere di ricevere il campione olimpico di Atene 2004, <strong>Stefano Baldini</strong>.",
      w3p2:
        "La parte più significativa, però, fu il lavoro con Ottavio Andriani. Non era abituato all'allenamento della forza, ma il suo allenatore gli aveva consigliato di integrare la preparazione su strada con un po' di lavoro in palestra. Mi proposi io: preparai un ciclo di forza, ne parlai con il suo allenatore — <strong>Piero Incalza</strong>, francavillese anche lui, responsabile del settore maratona della FIDAL e docente di Scienze Motorie a Modena — e ottenni il suo benestare. Lavorare con un atleta di livello olimpico, guadagnarmi la sua fiducia e ricevere l'approvazione di un tecnico così autorevole: per me fu una tripla soddisfazione. Di quel protocollo conservo ancora gli appunti scritti a mano.",
      w3q:
        "Bisogna studiare, per essere sicuri di ciò che si fa. E serve un pizzico di coraggio per proporsi, anche in situazioni che sembrano più grandi di noi.",
      w3cap:
        "Nella mia sala attrezzi a Francavilla Fontana, con Giacomo Leone, Ottavio Andriani e Stefano Baldini.",
    },
    credentials: {
      kicker: "Formazione",
      title: "Formazione & qualifiche",
      items: [
        { year: "oggi", label: "Chinesiologo professionista (L. 4/2013, UNC n°10972)" },
        { year: "2018", label: "Diploma di massofisioterapista (L. 403/71) — agenzia formativa Athena, Molise" },
        { year: "2016", label: "Brevetto del dispositivo PerfecTraining (poi Bodygon)" },
        { year: "2012", label: "Perfezionamento universitario «Riatletizzazione motoria nella riabilitazione sportiva» — «G. D'Annunzio» Chieti-Pescara (dir. R. Saggini)" },
        { year: "2011", label: "Docente Formatore Regionale FPI (Federazione Pugilistica Italiana)" },
        { year: "2009", label: "Laurea in Scienze delle Attività Motorie e Sportive — Università di Urbino «Carlo Bo» (tesi sulla forza nel pugilato, relatore N. Silvaggi)" },
        { year: "2006", label: "Istruttore giovanile e aspirante tecnico di pugilato — FPI (Federazione Pugilistica Italiana)" },
        { year: "2006", label: "Abilitazione a consulente di educazione motoria per la scuola primaria — Facoltà di Scienze Motorie e Scuola Regionale dello Sport delle Marche (CONI)" },
        { year: "2005", label: "Insegnante tecnico-allenatore FIPCF / FIPE (pesistica)" },
        { year: "2005", label: "Diploma in tecniche del massaggio — Thesis Scuole" },
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
        { period: "2025 – 2026", label: "Preparatore atletico — Gela Basket (campionato di Serie C vinto, promozione in Serie B)" },
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
        "Lezione alle classi quinte del Liceo Scientifico Sportivo «Eschilo» di Gela, nell'ambito delle attività di formazione e orientamento dell'istituto (2026)",
        "Relatore alla presentazione nazionale de «Le espressioni della forza» dentro un corso FIPE per tecnici di sollevamento pesi olimpico (CrossFit Corsico, Milano, 2025)",
        "Docente Formatore Regionale FPI (Federazione Pugilistica Italiana), dal 2011",
        "Relatore, con Emanuele Renzini (all. nazionale femminile), al seminario FPI sull'allenamento della forza nel pugilato femminile (Gallipoli, 2013)",
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
      title: "«Le espressioni della forza»",
      subtitle: "La metodologia di Bosco per il condizionamento neuromuscolare attraverso il Bodygon",
      text: "Il mio libro raccoglie e rende operativa l'eredità scientifica di Carmelo Bosco nel condizionamento neuromuscolare: dalla teoria alla misura in palestra, fino al Bodygon. La prefazione è di Sebastiano Corbu, allenatore della Nazionale italiana di pesistica olimpica.",
      meta: "Calzetti & Mariucci Editori, 2025 · ISBN 9788860287618",
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
      hUni: "The Urbino years",
      p0:
        "At Urbino I didn't wait for my degree to get started. In my very first year I earned my federal coaching qualification with <strong>FIPCF</strong> — today FIPE, the Italian weightlifting federation — and, in the same period, a diploma in massage techniques. In 2006 came my qualification as youth instructor and trainee boxing coach with the <strong>Italian Boxing Federation</strong> (FPI), and my certification as a movement-education consultant for primary schools, between the Faculty of Sport Science and the Marche Regional School of Sport. Those were years in which lecture hall and gym moved together: studying, teaching, meeting people.",
      capMyers:
        "Urbino, during a seminar series on basketball: the pleasure of meeting the legendary Carlton Myers.",
      hThesis: "The thesis that became a book",
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
        "In 2013, during an FPI training camp in Gallipoli, I was invited to speak alongside <strong>Emanuele Renzini</strong>, at the time coach of the women's national boxing team, for a seminar on strength training in women's boxing.",
      capGallipoliTalk: "Speaking as an FPI educator at the Gallipoli training camp, 2013.",
      capGallipoli: "Interviewed after the seminar. Gallipoli, 2013.",
      h4: "From performance to rehabilitation",
      p4:
        "Strength cannot live without healthy movement. In 2012 I earned a university specialization in <em>motor re-athletization for sports rehabilitation</em> at the «G. D'Annunzio» University of Chieti-Pescara, under Prof. Raul Saggini, at the Faculty of Medicine and Surgery. Between 2014 and 2018 I completed this path, qualifying as a massage therapist, hydrotherapist and finally physical therapist at the Athena training agency, in Molise.",
      h5: "From intuition to patent",
      p5:
        "In 2016 began the road that led to the <strong>PerfecTraining</strong> device — which evolved into today's <a class='hl-link' href='https://bodygon.com' target='_blank' rel='noopener noreferrer'>Bodygon</a> — and its patents. It is the point where the study of strength became a tool, and twenty years in the field became technology.",
    },
    wins: {
      kicker: "In the field",
      title: "Athletes & teams",
      lead:
        "Theory is worth what it produces. These are some of the journeys I've shared with athletes and teams: a championship won, a professional title, a strength cycle written by hand almost twenty years ago. Different stories, all with the same question behind them — how is a performance built?",
      w1y: "2025 / 2026 season",
      w1t: "Gela Basket: championship won, promoted to Serie B",
      w1p:
        "Throughout the 2025-2026 season I looked after <strong>Gela Basket</strong>'s athletic preparation, together with my partner <strong>Carmelo Nuzzi</strong>. The team finished first in the Sicilian <strong>Serie C</strong> championship and was promoted to the interregional <strong>Serie B</strong>. Behind a trophy there is a full season of daily work: preparation, load management, injury prevention, recovery — from the first preseason session to the final game.",
      w1cap: "With Carmelo Nuzzi, at the end of the championship.",
      w1cap2: "FIP Sicily — Serie C championship, first place, 2025/2026 season.",
      w2y: "2020 – 2021",
      w2t: "Gianluca Pappalardo, Cinture Pro champion",
      w2p:
        "I worked with <strong>Gianluca Pappalardo</strong>, professional middleweight boxer, towards winning the <strong>Trofeo delle Cinture Pro</strong> organised by the Italian Boxing Federation. Gianluca took the title, and his run of wins took him to <strong>second in the Italian rankings</strong> in his weight class. Preparing a professional means adding strength without taking away speed: exactly the question my thesis — and later my book — was born from.",
      w2cap: "«First goal reached together, one of many.»",
      w3y: "The early days",
      w3t: "The first strength cycle, written by hand",
      w3p1:
        "I was at the start of my career, working in a gym in my home town, Francavilla Fontana. Two prominent local athletes, <strong>Giacomo Leone</strong> and <strong>Ottavio Andriani</strong>, often brought along friends and colleagues of international standing: one day, in my weights room, I had the pleasure of hosting the Athens 2004 Olympic champion, <strong>Stefano Baldini</strong>.",
      w3p2:
        "The most meaningful part, though, was the work with Ottavio Andriani. He wasn't used to strength training, but his coach had advised him to complement his road work with some time in the gym. I put myself forward: I designed a strength cycle, discussed it with his coach — <strong>Piero Incalza</strong>, also from Francavilla, head of FIDAL's marathon department and a lecturer in Sport Science in Modena — and got his approval. Working with an Olympic-level athlete, earning his trust and receiving the endorsement of such an authoritative coach: for me it was a triple satisfaction. I still keep the handwritten notes of that protocol.",
      w3q:
        "You have to study, to be sure of what you're doing. And you need a pinch of courage to put yourself forward, even in situations that look bigger than you.",
      w3cap:
        "In my weights room in Francavilla Fontana, with Giacomo Leone, Ottavio Andriani and Stefano Baldini.",
    },
    credentials: {
      kicker: "Education",
      title: "Education & qualifications",
      items: [
        { year: "today", label: "Professional kinesiologist (It. Law 4/2013, UNC n°10972)" },
        { year: "2018", label: "Physical therapist diploma (It. Law 403/71) — Athena training agency, Molise" },
        { year: "2016", label: "Patent for the PerfecTraining device (later Bodygon)" },
        { year: "2012", label: "University specialization in motor re-athletization for sports rehabilitation — «G. D'Annunzio» Chieti-Pescara (dir. R. Saggini)" },
        { year: "2011", label: "Regional Trainer-Educator, FPI (Italian Boxing Federation)" },
        { year: "2009", label: "Degree in Sport and Movement Sciences — University of Urbino «Carlo Bo» (thesis on strength in boxing, supervisor N. Silvaggi)" },
        { year: "2006", label: "Youth instructor and trainee boxing coach — FPI (Italian Boxing Federation)" },
        { year: "2006", label: "Certification as movement-education consultant for primary school — Faculty of Sport Science and Marche Regional School of Sport (CONI)" },
        { year: "2005", label: "Technical coach certification — FIPCF / FIPE (weightlifting)" },
        { year: "2005", label: "Diploma in massage techniques — Thesis Scuole" },
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
        { period: "2025 – 2026", label: "Athletic coach — Gela Basket (Serie C championship won, promoted to Serie B)" },
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
        "Guest lecture to the final-year classes of the «Eschilo» sports-science high school in Gela, as part of the school's careers-guidance programme (2026)",
        "Speaker at the national launch of «Le espressioni della forza», inside an FIPE course for Olympic weightlifting coaches (CrossFit Corsico, Milan, 2025)",
        "Regional Trainer-Educator, FPI (Italian Boxing Federation), since 2011",
        "Speaker, with Emanuele Renzini (women's national team coach), at the FPI seminar on strength training in women's boxing (Gallipoli, 2013)",
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
      title: "«Le espressioni della forza»",
      subtitle: "Bosco's methodology for neuromuscular conditioning through the Bodygon",
      text: "My book gathers Carmelo Bosco's scientific legacy in neuromuscular conditioning and makes it operational: from theory to measurement in the gym, all the way to the Bodygon. The preface is by Sebastiano Corbu, coach of the Italian Olympic weightlifting national team.",
      meta: "Calzetti & Mariucci Editori, 2025 · ISBN 9788860287618",
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
