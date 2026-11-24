/*
 * SINGLE SOURCE OF CONTENT, both locales. Italian (it) is primary; English (en)
 * mirrors it. Editing this file is how the site grows: small, reviewable diffs.
 * Keep the two locales structurally identical (same keys).
 *
 * NOTE: `story.*` and a few other fields contain trusted inline HTML (rendered
 * via [data-i18n-html]). Only author-controlled markup lives here.
 */
window.SITE_CONTENT = {
  meta: { defaultLang: "it", languages: ["it", "en"], domain: "emanueledambrosio.com" },

  // Locale-independent. A locale's own `links` (e.g. the book edition in that
  // language) takes precedence over these for [data-link].
  // `email` is [user, domain] on purpose: with no "@" anywhere in the source,
  // address harvesters scanning the HTML or this file find nothing. main.js
  // joins the two parts at runtime for the button and the visible address.
  links: { courses: "https://www.bodygon.com/corsi-2027/", videocourses: "https://videocorsi.bodygon.com/courses", publisher: "https://calzetti-mariucci.it/prodotto/le-espressioni-della-forza", email: ["dambrosioemanuele1983", "gmail.com"] },

  // Photos of the courses Emanuele has taught, for the carousel in the
  // in-person course card (same set and order as bodygon.com/corsi-2027).
  // Locale-independent files, captions in both languages.
  coursePhotos: [
    { src: "./assets/img/corso-bodygon-palestra.jpg", it: "Emanuele d'Ambrosio in piedi al centro di una palestra spiega ai corsisti seduti in cerchio sui cassoni", en: "Emanuele d'Ambrosio standing in the middle of a gym, explaining to course participants sitting in a circle on plyo boxes" },
    { src: "./assets/img/corsi/milano-2025.jpg", it: "Corsisti seduti in una palestra a Milano durante il corso, con il libro «Le espressioni della forza» in primo piano", en: "Participants sitting in a gym in Milan during the course, with the book «Le espressioni della forza» in the foreground" },
    { src: "./assets/img/corsi/gela-pegaso-2020.jpg", it: "Emanuele d'Ambrosio spiega la forza massima con una slide proiettata, nell'aula dell'Università Telematica Pegaso di Gela", en: "Emanuele d'Ambrosio explains maximal strength with a projected slide, in the lecture room of Pegaso Telematic University in Gela" },
    { src: "./assets/img/corsi/cassoni.jpg", it: "Emanuele d'Ambrosio in piedi spiega ai corsisti seduti sui cassoni in una palestra", en: "Emanuele d'Ambrosio, standing, explains to participants sitting on plyo boxes in a gym" },
    { src: "./assets/img/corsi/dimostrazione-tappetino.jpg", it: "Emanuele d'Ambrosio spiega un esercizio a terra eseguito da una corsista sul tappetino, con il gruppo che osserva", en: "Emanuele d'Ambrosio explains a floor exercise performed by a participant on a mat, with the group watching" },
    { src: "./assets/img/corsi/dimostrazione.jpg", it: "Emanuele d'Ambrosio mostra un movimento su un corsista, davanti al gruppo seduto", en: "Emanuele d'Ambrosio demonstrates a movement on a participant, in front of the seated group" },
    { src: "./assets/img/corsi/panca.jpg", it: "Emanuele d'Ambrosio segue una prova in panca piana insieme ad altre persone, in una palestra con il tricolore", en: "Emanuele d'Ambrosio follows a bench press test with other people, in a gym with the Italian flag" },
    { src: "./assets/img/corsi/tappetino.jpg", it: "Emanuele d'Ambrosio mostra un esercizio a terra con una corsista sul tappetino, davanti al gruppo", en: "Emanuele d'Ambrosio shows a floor exercise with a participant on a mat, in front of the group" },
    { src: "./assets/img/corsi/in-piedi.jpg", it: "Emanuele d'Ambrosio e i corsisti in piedi osservano una prova pratica in una sala", en: "Emanuele d'Ambrosio and the participants, standing, watch a practical test in a hall" },
    { src: "./assets/img/corsi/postura.jpg", it: "Emanuele d'Ambrosio osserva un corsista piegato in avanti durante una valutazione, con il gruppo intorno", en: "Emanuele d'Ambrosio observes a participant bending forward during an assessment, with the group around" },
    { src: "./assets/img/corsi/palestra-terra.jpg", it: "Emanuele d'Ambrosio in piedi in palestra spiega ai partecipanti seduti a terra, che prendono appunti", en: "Emanuele d'Ambrosio, standing in a gym, explains to participants sitting on the floor and taking notes" },
    { src: "./assets/img/corsi/ring.jpg", it: "Emanuele d'Ambrosio a bordo ring con tre pugili", en: "Emanuele d'Ambrosio at the ringside with three boxers" },
    { src: "./assets/img/corsi/cassoni-cerchio.jpg", it: "Corsisti seduti in cerchio sui cassoni ascoltano Emanuele d'Ambrosio, in piedi al centro della palestra", en: "Participants sitting in a circle on plyo boxes listen to Emanuele d'Ambrosio, standing in the middle of the gym" },
    { src: "./assets/img/corsi/centro-sportivo.jpg", it: "Emanuele d'Ambrosio con altre due persone in un centro sportivo, sotto le maglie incorniciate di Baggio e Maldini", en: "Emanuele d'Ambrosio with two other people at a sports centre, under the framed shirts of Baggio and Maldini" },
    { src: "./assets/img/corsi/lezione-2014.jpg", it: "Emanuele d'Ambrosio alla cattedra spiega a una sala piena di partecipanti, con un grafico proiettato alle spalle", en: "Emanuele d'Ambrosio at the lectern speaks to a full room of participants, with a chart projected behind him" },
    { src: "./assets/img/corsi/la-spezia-2016.jpg", it: "Articolo di giornale del 1 febbraio 2016 sullo stage di trenta ore per preparatori atletici degli sport da combattimento tenuto da Emanuele d'Ambrosio a Ceparana, La Spezia", en: "Newspaper article of 1 February 2016 on the thirty-hour workshop for combat-sports strength coaches held by Emanuele d'Ambrosio in Ceparana, La Spezia" },
    { src: "./assets/img/corsi/lezione-2014-sala.jpg", it: "Una sala piena di partecipanti segue Emanuele d'Ambrosio, seduto alla cattedra davanti a una tabella proiettata", en: "A full room of participants follows Emanuele d'Ambrosio, seated at the lectern in front of a projected table" },
    { src: "./assets/img/corsi/seduti.jpg", it: "Un corso in una sala fitness, con i corsisti seduti in cerchio che prendono appunti mentre Emanuele d'Ambrosio spiega", en: "A course in a fitness room, with participants sitting in a circle taking notes while Emanuele d'Ambrosio explains" },
    { src: "./assets/img/corsi/dati.jpg", it: "Emanuele d'Ambrosio e altre tre persone leggono su tablet e computer i dati di una prova, in un centro sportivo", en: "Emanuele d'Ambrosio and three other people read the data of a test on a tablet and a computer, at a sports centre" },
    { src: "./assets/img/corsi/aula.jpg", it: "Emanuele d'Ambrosio in piedi accanto alla proiezione spiega a una sala di partecipanti seduti", en: "Emanuele d'Ambrosio, standing next to the projection, explains to a room of seated participants" },
    { src: "./assets/img/corsi/gruppo.jpg", it: "Foto di gruppo all'aperto con Emanuele d'Ambrosio e i partecipanti", en: "Outdoor group photo with Emanuele d'Ambrosio and the participants" },
    { src: "./assets/img/corsi/sala.jpg", it: "Emanuele d'Ambrosio in piedi spiega ai partecipanti seduti al tavolo, con una slide proiettata alle spalle", en: "Emanuele d'Ambrosio, standing, explains to participants seated at a table, with a slide projected behind him" },
    { src: "./assets/img/corsi/sala-riunioni.jpg", it: "Emanuele d'Ambrosio spiega la mobilità articolare a un tavolo di corsisti, con la slide proiettata alle spalle", en: "Emanuele d'Ambrosio explains joint mobility to a table of participants, with the slide projected behind him" },
    { src: "./assets/img/corsi/pedane.jpg", it: "Emanuele d'Ambrosio in piedi spiega ai corsisti seduti sulle pedane da step in una palestra", en: "Emanuele d'Ambrosio, standing, explains to participants sitting on step platforms in a gym" },
    { src: "./assets/img/corsi/plicometro.jpg", it: "Emanuele d'Ambrosio mostra un plicometro in un selfie con i corsisti seduti alle sue spalle", en: "Emanuele d'Ambrosio shows a skinfold caliper in a selfie with the participants sitting behind him" },
    { src: "./assets/img/corsi/libri.jpg", it: "Selfie di Emanuele d'Ambrosio con i corsisti seduti in palestra, ognuno con un libro in mano", en: "Selfie of Emanuele d'Ambrosio with the participants sitting in a gym, each holding a book" },
    { src: "./assets/img/corsi/foto-gruppo.jpg", it: "Foto di gruppo in sala pesi con Emanuele d'Ambrosio e i corsisti", en: "Group photo in the weights room with Emanuele d'Ambrosio and the participants" },
  ],

  // Textbooks Emanuele studied, locale-independent titles. Fill from his list.
  studyBooks: [],

  it: {
    links: { book: "https://www.amazon.it/dp/8860287618" },
    seo: {
      title: "Emanuele d'Ambrosio | Forza, coaching, formazione",
      description:
        "Emanuele d'Ambrosio: chinesiologo, metodologo della forza e della performance sportiva, autore di «Le Espressioni della Forza». Coaching, preparazione atletica e formazione.",
    },
    nav: { langLabel: "Lingua" },
    hero: {
      eyebrow: "Chinesiologo · Metodologo della forza e della performance sportiva · Autore",
      name: "Emanuele d'Ambrosio",
      tagline: "Lo studio della forza,\napplicato sul campo.",
      intro:
        "Laurea in Scienze Motorie, chinesiologo e massofisioterapista. Dalla ricerca sulla forza, la mia tesi che ha posto le basi per un libro, al lavoro quotidiano con atleti e persone.",
      ctaBook: "Il libro",
      ctaContact: "Contatti",
    },
    about: {
      kicker: "Chi sono",
      title: "Dalla teoria della forza alla pratica",
      p1: "Sono Emanuele d'Ambrosio, laureato in Scienze delle Attività Motorie e Sportive all'Università di Urbino «Carlo Bo». Studio la forza e le sue espressioni da oltre vent'anni, come metodologo e ricercatore indipendente nell'ambito della metodologia dell'allenamento, dalla tesi di laurea al libro, dalla ricerca al lavoro quotidiano sul campo.",
      p2: "Chinesiologo e massofisioterapista, gestisco lo Sporting Club Antares a Gela, dove seguo atleti e persone come personal trainer e preparatore atletico per ogni disciplina, dagli sport da combattimento al calcio.",
      h1: "Laurea in Scienze Motorie (Urbino)",
      h2: "Chinesiologo · Massofisioterapista",
      h3: "Inventore del dispositivo PerfecTraining, evoluto in",
      h4: "Docente formatore CONI · FPI",
    },
    story: {
      kicker: "Il percorso",
      title: "Dalla tesi al metodo",
      lead:
        "Prima di essere un libro, «Le Espressioni della Forza» è stata una domanda. Una domanda nata sul ring e portata all'università, che ho continuato a inseguire per vent'anni, dalla ricerca alla federazione, dalla riabilitazione fino all'invenzione di un dispositivo.",
      hUni: "Gli anni di Urbino",
      p0:
        "A Urbino non ho aspettato la laurea per cominciare. Già dal primo anno conseguo la qualifica tecnica federale con la <strong>FIPCF</strong> (oggi FIPE, la federazione italiana di pesistica) e, nello stesso periodo, il diploma in tecniche del massaggio. Nel 2006 arrivano la qualifica di istruttore giovanile e aspirante tecnico di pugilato con la <strong>Federazione Pugilistica Italiana</strong> e l'abilitazione come consulente di educazione motoria per la scuola primaria, tra la facoltà di Scienze Motorie e la Scuola Regionale dello Sport delle Marche. Sono anni in cui l'aula e la palestra procedono insieme: si studia, si insegna, si incontrano persone.",
      capMyers:
        "Urbino, durante un ciclo di seminari sulla pallacanestro. Il piacere di conoscere il mitico Carlton Myers.",
      hThesis: "La tesi che ha posto le basi per un libro",
      capThesis:
        "La mia tesi di laurea in Scienze Motorie, Urbino. Non un punto di arrivo, ma il trampolino della mia vita professionale.",
      p1:
        "Nel 2009 mi laureo in Scienze Motorie all'Università di Urbino «Carlo Bo» con una tesi dal titolo <em>«La forza e le sue espressioni nel pugilato dilettantistico»</em>. Relatore è <strong>Nicola Silvaggi</strong>, all'epoca commissario tecnico della FIDAL e allenatore di <strong>Nicola Vizzoni</strong>, argento olimpico a Sydney 2000 nel lancio del martello. Silvaggi è uno dei massimi esperti italiani di condizionamento della forza muscolare. Studiare la forza sotto la sua guida ha dato metodo scientifico a un'intuizione che avevo maturato allenandomi e allenando.",
      capSilvaggi: "Con il prof. Nicola Silvaggi dopo la discussione della tesi. Urbino, 2009.",
      quote:
        "Il titolo di quella tesi, <em>la forza e le sue espressioni</em>, anni dopo è diventato il titolo del mio libro.",
      h2: "Il riconoscimento della federazione",
      p2:
        "Nel 2011 il mio contributo sulla metodologia dell'allenamento viene pubblicato sul sito ufficiale della <strong>Federazione Pugilistica Italiana</strong> come apporto innovativo. Dopo averne verificato di persona il valore didattico e scientifico, <strong>Massimo Scioti</strong>, allora responsabile della formazione dei tecnici nazionali, dispone l'inserimento del mio nome nell'elenco dei formatori regionali FPI, per i comitati di Puglia e Basilicata, nella materia metodologia dell'allenamento.",
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
        "Nel 2016 comincia la strada che porta allo sviluppo del dispositivo <strong>PerfecTraining</strong> (evolutosi nell'attuale <a class='hl-link' href='https://bodygon.com' target='_blank' rel='noopener noreferrer'>Bodygon</a>) e ai relativi brevetti. È il punto in cui lo studio della forza diventa uno strumento, e vent'anni di campo diventano tecnologia. Nel 2019, al convegno su sport e tecnologia dell'Università di Roma Tor Vergata, il prof. Giuseppe Annino lo cita come possibilità tecnologica innovativa; nella stagione 2024/2025 il Bodygon è sponsor della <strong>Federazione Italiana Pesistica</strong>, che da allora lo ha in dotazione. La ricerca intanto continua. Oggi conduco uno studio sperimentale esplorativo sugli effetti acuti della serie lenta a sfinimento sulla performance neuromuscolare.",
    },
    wins: {
      kicker: "Sul campo",
      title: "Atleti & squadre",
      lead:
        "La teoria vale quanto i risultati che produce. Questi sono alcuni dei percorsi che ho condiviso con atleti e squadre: un campionato vinto, un titolo professionistico, un ciclo di forza scritto a mano quasi vent'anni fa. Storie diverse, con dietro sempre la stessa domanda. Come si costruisce una prestazione?",
      w1y: "Stagione 2025 / 2026",
      w1t: "Gela Basket: campionato vinto, promozione in Serie B",
      w1p:
        "Per l'intera stagione agonistica 2025-2026 ho seguito il <strong>Gela Basket</strong> dal punto di vista atletico, insieme al collega <strong>Carmelo Nuzzi</strong>. La squadra ha chiuso al primo posto il campionato siciliano di <strong>Serie C</strong> ed è stata promossa al campionato interregionale di <strong>Serie B</strong>. Dietro a una coppa c'è una stagione intera di lavoro quotidiano: preparazione, gestione dei carichi, prevenzione degli infortuni, recupero. Dalla prima seduta di preparazione all'ultima partita.",
      w1cap: "Con Carmelo Nuzzi, al termine del campionato.",
      w1cap2: "FIP Sicilia, Campionato di Serie C, prima classificata, stagione 2025/2026.",
      w2y: "2020-2021",
      w2t: "Gianluca Pappalardo, campione delle Cinture Pro",
      w2p:
        "Con <strong>Gianluca Pappalardo</strong>, pugile professionista dei pesi medi, ho collaborato per la conquista del <strong>Trofeo delle Cinture Pro</strong> organizzato dalla Federazione Pugilistica Italiana. Gianluca ha vinto il titolo, e la scia di vittorie lo ha portato al <strong>secondo posto nel ranking italiano</strong> della sua categoria. Preparare un professionista vuol dire aggiungere forza senza togliere velocità. È esattamente la domanda da cui sono nati la mia tesi e, poi, il mio libro.",
      w2cap: "«Primo traguardo raggiunto insieme, uno dei tanti.»",
      w3y: "Gli inizi",
      w3t: "Il primo ciclo di forza, scritto a mano",
      w3p1:
        "Ero all'inizio della mia carriera e lavoravo in una palestra del mio paese, Francavilla Fontana. Due atleti di spicco del posto, <strong>Giacomo Leone</strong> e <strong>Ottavio Andriani</strong>, portavano spesso con sé amici e colleghi di livello internazionale. Un giorno, nella mia sala attrezzi, ho avuto il piacere di ricevere il campione olimpico di Atene 2004, <strong>Stefano Baldini</strong>.",
      w3p2:
        "La parte più significativa, però, fu il lavoro con Ottavio Andriani. Non era abituato all'allenamento della forza, ma il suo allenatore gli aveva consigliato di integrare la preparazione su strada con un po' di lavoro in palestra. Mi proposi io. Preparai un ciclo di forza, ne parlai con il suo allenatore, <strong>Piero Incalza</strong> (francavillese anche lui, responsabile del settore maratona della FIDAL e docente di Scienze Motorie a Modena), e ottenni il suo benestare. Lavorare con un atleta di livello olimpico, guadagnarmi la sua fiducia e ricevere l'approvazione di un tecnico così autorevole fu per me una tripla soddisfazione. Di quel protocollo conservo ancora gli appunti scritti a mano.",
      w3q:
        "Bisogna studiare, per essere sicuri di ciò che si fa. E serve un pizzico di coraggio per proporsi, anche in situazioni che sembrano più grandi di noi.",
      w3cap:
        "Nella mia sala attrezzi a Francavilla Fontana, con Giacomo Leone, Ottavio Andriani e Stefano Baldini.",
    },
    credentials: {
      kicker: "Formazione",
      title: "Formazione & qualifiche",
      items: [
        { year: "2026", label: "Performance Coach certificato: Parisi Speed School, Napoli" },
        { year: "dal 2024", label: "Docente formatore nazionale Libertas, ente di promozione sportiva riconosciuto dal CONI" },
        { year: "2021", label: "Allenatore di pesistica olimpica, primo livello (FIPE, comitato regionale Sicilia)" },
        { year: "2018", label: "Diploma di massofisioterapista (L. 403/71), agenzia formativa Athena, Molise" },
        { year: "2016", label: "Brevetto del dispositivo PerfecTraining (poi Bodygon)" },
        { year: "2015-2017", label: "Formatore nazionale MIVASS nei corsi di qualificazione in ambito fitness e sportivo" },
        { year: "2012", label: "Perfezionamento universitario «Riatletizzazione motoria nella riabilitazione sportiva», «G. D'Annunzio» Chieti-Pescara (dir. R. Saggini)" },
        { year: "2011-2014", label: "Docente Formatore Regionale FPI (Federazione Pugilistica Italiana)" },
        { year: "2011-2014", label: "Iscrizione all'Unione Nazionale Chinesiologi (n°10972), ai sensi della L. 4/2013" },
        { year: "2009", label: "Laurea in Scienze delle Attività Motorie e Sportive, Università di Urbino «Carlo Bo» (tesi sulla forza nel pugilato, relatore N. Silvaggi)" },
        { year: "2006", label: "Istruttore giovanile e aspirante tecnico di pugilato, FPI (Federazione Pugilistica Italiana)" },
        { year: "2006", label: "Abilitazione a consulente di educazione motoria per la scuola primaria, Facoltà di Scienze Motorie e Scuola Regionale dello Sport delle Marche (CONI)" },
        { year: "2005", label: "Insegnante tecnico-allenatore FIPCF / FIPE (pesistica)" },
        { year: "2005", label: "Diploma in tecniche del massaggio, Thesis Scuole" },
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
        { period: "2025-2026", label: "Preparatore atletico, Gela Basket (campionato di Serie C vinto, promozione in Serie B)" },
        { period: "2022-oggi", label: "Massofisioterapista libero professionista presso lo studio di medicina fisica e riabilitativa Rehab (dott. S. Abela, Gela)" },
        { period: "2019-oggi", label: "Gestore dello Sporting Club Antares (Gela): personal trainer, massofisioterapista, preparatore atletico" },
        { period: "2019", label: "Preparatore atletico, Gela Calcio (prima categoria)" },
        { period: "2018-2019", label: "Personal trainer e massofisioterapista, centro Olilab (Gela)" },
        { period: "2017-2018", label: "Massofisioterapista, Fisioterapik Center (Gela)" },
        { period: "2015-2017", label: "Personal trainer e istruttore di pugilato, Club Vitality / Antares (Gela)" },
        { period: "2011-2014", label: "Chinesiologo libero professionista, studio di chinesiologia (Francavilla Fontana)" },
        { period: "2008-2011", label: "Istruttore fitness e pugilato, personal trainer (Francavilla Fontana, Lecce)" },
      ],
    },
    teaching: {
      kicker: "Docenza",
      title: "Docenza & relatore",
      items: [
        "Lezione alle classi quinte del Liceo Scientifico Sportivo «Eschilo» di Gela, nell'ambito delle attività di formazione e orientamento dell'istituto (2026)",
        "Relatore alla presentazione nazionale de «Le espressioni della forza» dentro un corso FIPE per tecnici di sollevamento pesi olimpico (CrossFit Corsico, Milano, 2025)",
        "Docente formatore nazionale per la Libertas, ente di promozione sportiva riconosciuto dal CONI, nei corsi di qualifica del mondo fitness e sportivo (dal 2024)",
        "Relatore e divulgatore tecnico-scientifico a RiminiWellness: presentazione del Bodygon e anteprima de «Le espressioni della forza» (2024)",
        "Relatore alla presentazione in anteprima del Bodygon nella manifestazione pugilistica Umbria vs Fiamme Oro, con ospiti l'olimpionico Roberto Cammarelle e Francesco Damiani (Scheggia e Pascelupo, 2023)",
        "Organizzatore e docente nei corsi per istruttori di sala attrezzi e bodybuilding della Libertas (club Antares, Gela, 2024 e 2025)",
        "Docente di metodologia dell'allenamento, valutazione antropometrica e plicometria nel corso per istruttori di sala pesi del comitato provinciale ENDAS Ragusa (Scicli, 2022)",
        "Docente Formatore Regionale FPI (Federazione Pugilistica Italiana), dal 2011 al 2014",
        "Relatore, con Emanuele Renzini (all. nazionale femminile), al seminario FPI sull'allenamento della forza nel pugilato femminile (Gallipoli, 2013)",
        "Docente di metodologia dell'allenamento, corso per aspiranti tecnici FPI (Bari, 2014)",
        "Docente formatore in corsi per la qualifica CONI di personal trainer (Gela, La Spezia, 2016)",
        "Docente formatore nel corso per preparatore atletico negli sport da combattimento (La Spezia, 2016)",
        "Organizzatore e docente del corso per istruttori di functional training (Antares, Gela, 2017)",
        "Relatore al seminario «La forza e le sue espressioni»: monitoraggio e allenamento con il PerfecTraining (Pegaso Università Telematica, 2020)",
        "Relatore nelle presentazioni del dispositivo PerfecTraining in tutta Italia (Perugia, Catania, Jesi, La Spezia, Pontecagnano, centro nazionale FPI)",
        "Test dell'intera Nazionale femminile di pugilato al centro nazionale FPI di Santa Maria degli Angeli, Irma Testa e Guido Vianello compresi (2018), e degli azzurri del fioretto al centro federale di Jesi (2019)",
        "Relatore al convegno «Benessere sociale nei pazienti oncologici», con il Comune di Gela e la FAVO, al Teatro Antidoto di Gela (2025)",
      ],
    },
    cpd: {
      kicker: "Formazione continua",
      title: "Seminari & aggiornamento",
      items: [
        { year: "2015", label: "BLSD (Basic Life Support & Defibrillation)" },
        { year: "2014", label: "«La lombalgia: nuovo approccio alla decompressione dei dischi intervertebrali» (UNC)" },
        { year: "2011", label: "VII Seminario FPI «La boxe femminile», Assisi" },
        { year: "2010", label: "VI Seminario FPI «L'incremento della forza nell'età giovanile», Assisi" },
        { year: "2010", label: "FIPCF «Valutazione funzionale e postura», Lecce" },
        { year: "2009", label: "FPI «Match Analysis, Mondiali Milano 2009», Assisi" },
        { year: "2007", label: "FIPCF «Il carico motorio e gli adattamenti fisiologici», Bari" },
      ],
    },
    sports: {
      kicker: "Sport",
      title: "Sport praticati a livello agonistico",
      items: ["Pugilato", "Atletica leggera (salto in alto, getto del peso, 4×100, mezzofondo)", "Pallacanestro"],
    },
    book: {
      kicker: "Il libro",
      title: "«Le espressioni della forza»",
      subtitle: "La metodologia di Bosco per il condizionamento neuromuscolare attraverso il Bodygon",
      text: "Il mio libro raccoglie e rende operativa l'eredità scientifica di Carmelo Bosco nel condizionamento neuromuscolare, dalla teoria alla misura in palestra, fino al Bodygon. La prefazione è di Sebastiano Corbu, allenatore della Nazionale italiana di pesistica olimpica.",
      meta: "Calzetti & Mariucci Editori, 2025 · ISBN 9788860287618",
      publisher: "Edito da",
      cta: "Scopri il libro",
      image: "./assets/img/book-it.jpg",
      imageAlt: "Il libro «Le espressioni della forza» di Emanuele d'Ambrosio, fronte e retro",
    },
    footer: {
      rights:
        "Tutti i diritti riservati. È vietata la riproduzione, anche parziale, di testi e immagini senza autorizzazione.",
    },
    ui: { prev: "Foto precedente", next: "Foto successiva", close: "Chiudi", enlarge: "Ingrandisci", photos: "Foto dei corsi" },
    courses: {
      kicker: "Novità",
      title: "Corsi e videocorsi Bodygon",
      intro:
        "Quello che racconto nel libro adesso lo insegno nei corsi Bodygon: in presenza, nei centri sportivi, e in tre videocorsi che ho registrato.",
      liveLabel: "Corso in presenza · 2027",
      liveTitle: "Corso Bodygon. Le espressioni della forza",
      liveText:
        "Sedici ore di teoria e pratica, il sabato e la domenica, in un centro sportivo. Il docente sono io. Si parte dalle cinque espressioni della forza e dalla metodologia di Bosco, poi serie lenta, lavoro isometrico e metodo trifasico, e il Bodygon lo usi su di te.",
      liveFacts: [
        "Dieci città da gennaio a maggio 2027: Perugia, Brindisi, Milano, Roma, Padova, Bologna, Napoli, Caltagirone, La Spezia, Cagliari",
        "Venti posti per sede",
        "Attestato con CNS Libertas, ente di promozione sportiva riconosciuto dal CONI",
        "Il libro «Le espressioni della forza» è compreso",
      ],
      liveCta: "Scopri il corso",
      videoLabel: "Videocorsi",
      videoTitle: "Videocorsi Bodygon. Le espressioni della forza",
      videoText:
        "Tre videocorsi che ho registrato per chi vuole studiare il metodo con i suoi tempi, due ore e mezza in tutto. Si possono prendere tutti e tre insieme o uno alla volta.",
      videoItems: [
        "L'allenamento della forza basato sulla potenza · 1 ora e 21 minuti",
        "Isometria funzionale e stato dinamico specifico · 32 minuti",
        "Allenamento della forza a bassa velocità · 37 minuti",
      ],
      videoCta: "Guarda i videocorsi",
      videoAlt: "Emanuele d'Ambrosio alla scrivania presenta i tre videocorsi Bodygon",
    },
    news: {
      kicker: "Aggiornamenti",
      title: "In formazione continua",
      itemTitle: "Anatomy of Speed, certificazione Parisi",
      itemText:
        "In questi giorni partecipo al primo corso tenuto in Italia da Bill Parisi per la certificazione «Anatomy of Speed».",
      captionPhoto: "Bill Parisi, AoS 2 Live Certification Course.",
      captionVideo: "Un momento dal corso.",
      captionDedication: "La dedica di Bill Parisi sulla sua «Anatomia della Velocità» (Calzetti & Mariucci).",
    },
    contact: {
      kicker: "Contatti",
      title: "Collaborazioni e progetti",
      text: "Per collaborazioni professionali, docenza, formazione e progetti.",
      location: "Sporting Club Antares, Gela (CL)",
      emailLabel: "Contattami",
    },
  },

  en: {
    links: { book: "https://www.amazon.com/dp/B0HQXHTVWR" },
    seo: {
      title: "Emanuele d'Ambrosio | Strength, coaching, education",
      description:
        "Emanuele d'Ambrosio: kinesiologist, strength and sports-performance methodologist, author of «Le Espressioni della Forza». Coaching, athletic preparation and education.",
    },
    nav: { langLabel: "Language" },
    hero: {
      eyebrow: "Kinesiologist · Strength and sports-performance methodologist · Author",
      name: "Emanuele d'Ambrosio",
      tagline: "The study of strength,\napplied in the field.",
      intro:
        "Sport-science graduate, kinesiologist and physical therapist. From research on strength, the thesis that laid the groundwork for a book, to daily work with athletes and people.",
      ctaBook: "The book",
      ctaContact: "Contact",
    },
    about: {
      kicker: "About",
      title: "From the theory of strength to practice",
      p1: "I'm Emanuele d'Ambrosio, a graduate in Sport and Movement Sciences from the University of Urbino «Carlo Bo». I've studied strength and its expressions for over twenty years, as a methodologist and independent researcher in training methodology, from my degree thesis to my book, from research to daily work in the field.",
      p2: "Kinesiologist and physical therapist, I run the Antares Sporting Club in Gela, where I coach athletes and people as a personal trainer and athletic coach across every discipline, from combat sports to football.",
      h1: "Sport Science degree (Urbino)",
      h2: "Kinesiologist · Physical therapist",
      h3: "Inventor of the PerfecTraining device, evolved into",
      h4: "CONI · FPI educator / trainer",
    },
    story: {
      kicker: "The journey",
      title: "From thesis to method",
      lead:
        "Before it was a book, «Le Espressioni della Forza» was a question. A question born in the ring and taken to university, one I kept chasing for twenty years, from research to the federation, from rehabilitation all the way to inventing a device.",
      hUni: "The Urbino years",
      p0:
        "At Urbino I didn't wait for my degree to get started. In my very first year I earned my federal coaching qualification with <strong>FIPCF</strong> (today FIPE, the Italian weightlifting federation) and, in the same period, a diploma in massage techniques. In 2006 came my qualification as youth instructor and trainee boxing coach with the <strong>Italian Boxing Federation</strong> (FPI), and my certification as a movement-education consultant for primary schools, between the Faculty of Sport Science and the Marche Regional School of Sport. Those were years in which lecture hall and gym moved together: studying, teaching, meeting people.",
      capMyers:
        "Urbino, during a seminar series on basketball. The pleasure of meeting the legendary Carlton Myers.",
      hThesis: "The thesis that laid the groundwork for a book",
      capThesis:
        "My degree thesis in Sport Science, Urbino. Not a finish line, but the springboard of my professional life.",
      p1:
        "In 2009 I graduated in Sport and Movement Sciences at the University of Urbino «Carlo Bo» with a thesis titled <em>«Strength and its expressions in amateur boxing»</em>. My supervisor was <strong>Nicola Silvaggi</strong>, at the time head coach of the Italian Athletics Federation (FIDAL) and coach of <strong>Nicola Vizzoni</strong>, Olympic silver medallist in the hammer throw at Sydney 2000. Silvaggi is one of Italy's foremost experts in muscular strength conditioning. Studying strength under his guidance gave scientific method to an intuition I had formed by training, and by coaching.",
      capSilvaggi: "With Prof. Nicola Silvaggi after defending my thesis. Urbino, 2009.",
      quote:
        "The title of that thesis, <em>strength and its expressions</em>, later became the title of my book.",
      h2: "Recognised by the federation",
      p2:
        "In 2011 my contribution on training methodology was published on the official website of the <strong>Italian Boxing Federation</strong> (FPI) as an innovative one. After personally verifying its educational and scientific value, <strong>Massimo Scioti</strong>, then head of national coach education, added my name to the roster of FPI regional trainers, for the Puglia and Basilicata committees, in the field of training methodology.",
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
        "In 2016 began the road that led to the <strong>PerfecTraining</strong> device (which evolved into today's <a class='hl-link' href='https://bodygon.com' target='_blank' rel='noopener noreferrer'>Bodygon</a>) and its patents. It is the point where the study of strength became a tool, and twenty years in the field became technology. In 2019, at the sport-and-technology conference of Tor Vergata University in Rome, Prof. Giuseppe Annino cited it as an innovative technological option; in the 2024/2025 season the Bodygon was a sponsor of the <strong>Italian Weightlifting Federation</strong>, which has used it ever since. The research continues. I am currently running an exploratory experimental study on the acute effects of slow sets to failure on neuromuscular performance.",
    },
    wins: {
      kicker: "In the field",
      title: "Athletes & teams",
      lead:
        "Theory is worth what it produces. These are some of the journeys I've shared with athletes and teams: a championship won, a professional title, a strength cycle written by hand almost twenty years ago. Different stories, all with the same question behind them. How is a performance built?",
      w1y: "2025 / 2026 season",
      w1t: "Gela Basket: championship won, promoted to Serie B",
      w1p:
        "Throughout the 2025-2026 season I looked after <strong>Gela Basket</strong>'s athletic preparation, together with my colleague <strong>Carmelo Nuzzi</strong>. The team finished first in the Sicilian <strong>Serie C</strong> championship and was promoted to the interregional <strong>Serie B</strong>. Behind a trophy there is a full season of daily work: preparation, load management, injury prevention, recovery. From the first preseason session to the final game.",
      w1cap: "With Carmelo Nuzzi, at the end of the championship.",
      w1cap2: "FIP Sicily, Serie C championship, first place, 2025/2026 season.",
      w2y: "2020-2021",
      w2t: "Gianluca Pappalardo, Cinture Pro champion",
      w2p:
        "I worked with <strong>Gianluca Pappalardo</strong>, professional middleweight boxer, towards winning the <strong>Trofeo delle Cinture Pro</strong> organised by the Italian Boxing Federation. Gianluca took the title, and his run of wins took him to <strong>second in the Italian rankings</strong> in his weight class. Preparing a professional means adding strength without taking away speed. That is exactly the question my thesis, and later my book, was born from.",
      w2cap: "«First goal reached together, one of many.»",
      w3y: "The early days",
      w3t: "The first strength cycle, written by hand",
      w3p1:
        "I was at the start of my career, working in a gym in my home town, Francavilla Fontana. Two prominent local athletes, <strong>Giacomo Leone</strong> and <strong>Ottavio Andriani</strong>, often brought along friends and colleagues of international standing. One day, in my weights room, I had the pleasure of hosting the Athens 2004 Olympic champion, <strong>Stefano Baldini</strong>.",
      w3p2:
        "The most meaningful part, though, was the work with Ottavio Andriani. He wasn't used to strength training, but his coach had advised him to complement his road work with some time in the gym. I put myself forward. I designed a strength cycle, discussed it with his coach, <strong>Piero Incalza</strong> (also from Francavilla, head of FIDAL's marathon department and a lecturer in Sport Science in Modena), and got his approval. Working with an Olympic-level athlete, earning his trust and receiving the endorsement of such an authoritative coach was a triple satisfaction for me. I still keep the handwritten notes of that protocol.",
      w3q:
        "You have to study, to be sure of what you're doing. And you need a pinch of courage to put yourself forward, even in situations that look bigger than you.",
      w3cap:
        "In my weights room in Francavilla Fontana, with Giacomo Leone, Ottavio Andriani and Stefano Baldini.",
    },
    credentials: {
      kicker: "Education",
      title: "Education & qualifications",
      items: [
        { year: "2026", label: "Certified Performance Coach: Parisi Speed School, Naples" },
        { year: "since 2024", label: "National trainer-educator for Libertas, a sports promotion body recognised by CONI" },
        { year: "2021", label: "Olympic weightlifting coach, level one (FIPE, Sicily regional committee)" },
        { year: "2018", label: "Physical therapist diploma (It. Law 403/71), Athena training agency, Molise" },
        { year: "2016", label: "Patent for the PerfecTraining device (later Bodygon)" },
        { year: "2015-2017", label: "National trainer-educator for MIVASS in fitness and sports qualification courses" },
        { year: "2012", label: "University specialization in motor re-athletization for sports rehabilitation, «G. D'Annunzio» Chieti-Pescara (dir. R. Saggini)" },
        { year: "2011-2014", label: "Regional Trainer-Educator, FPI (Italian Boxing Federation)" },
        { year: "2011-2014", label: "Registered with the Italian Kinesiologists Union (no. 10972), under It. Law 4/2013" },
        { year: "2009", label: "Degree in Sport and Movement Sciences, University of Urbino «Carlo Bo» (thesis on strength in boxing, supervisor N. Silvaggi)" },
        { year: "2006", label: "Youth instructor and trainee boxing coach, FPI (Italian Boxing Federation)" },
        { year: "2006", label: "Certification as movement-education consultant for primary school, Faculty of Sport Science and Marche Regional School of Sport (CONI)" },
        { year: "2005", label: "Technical coach certification, FIPCF / FIPE (weightlifting)" },
        { year: "2005", label: "Diploma in massage techniques, Thesis Scuole" },
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
        { period: "2025-2026", label: "Athletic coach, Gela Basket (Serie C championship won, promoted to Serie B)" },
        { period: "2022-now", label: "Self-employed physical therapist at the Rehab physical and rehabilitation medicine practice (Dr. S. Abela, Gela)" },
        { period: "2019-now", label: "Manager of the Antares Sporting Club (Gela): personal trainer, physical therapist, athletic coach" },
        { period: "2019", label: "Athletic coach, Gela Calcio (first division, amateur)" },
        { period: "2018-2019", label: "Personal trainer and physical therapist, Olilab center (Gela)" },
        { period: "2017-2018", label: "Physical therapist, Fisioterapik Center (Gela)" },
        { period: "2015-2017", label: "Personal trainer and boxing instructor, Club Vitality / Antares (Gela)" },
        { period: "2011-2014", label: "Self-employed kinesiologist, kinesiology practice (Francavilla Fontana)" },
        { period: "2008-2011", label: "Fitness and boxing instructor, personal trainer (Francavilla Fontana, Lecce)" },
      ],
    },
    teaching: {
      kicker: "Teaching",
      title: "Teaching & speaking",
      items: [
        "Guest lecture to the final-year classes of the «Eschilo» sports-science high school in Gela, as part of the school's careers-guidance programme (2026)",
        "Speaker at the national launch of «Le espressioni della forza», inside an FIPE course for Olympic weightlifting coaches (CrossFit Corsico, Milan, 2025)",
        "National trainer-educator for Libertas, a sports promotion body recognised by CONI, in fitness and sports qualification courses (since 2024)",
        "Speaker and technical-scientific communicator at RiminiWellness: presenting the Bodygon and previewing «Le espressioni della forza» (2024)",
        "Speaker at the Bodygon preview during the Umbria vs Fiamme Oro boxing event, with Olympic champion Roberto Cammarelle and Francesco Damiani as guests (Scheggia e Pascelupo, 2023)",
        "Organiser and lecturer in the Libertas courses for weights-room and bodybuilding instructors (Antares club, Gela, 2024 and 2025)",
        "Lecturer in training methodology, anthropometric assessment and skinfold measurement on the weights-room instructor course of the ENDAS Ragusa provincial committee (Scicli, 2022)",
        "Regional Trainer-Educator, FPI (Italian Boxing Federation), from 2011 to 2014",
        "Speaker, with Emanuele Renzini (women's national team coach), at the FPI seminar on strength training in women's boxing (Gallipoli, 2013)",
        "Lecturer in training methodology, course for aspiring FPI coaches (Bari, 2014)",
        "Educator in CONI certification courses for personal trainers (Gela, La Spezia, 2016)",
        "Educator in the course for combat-sports athletic coaches (La Spezia, 2016)",
        "Organiser and educator of the functional-training instructor course (Antares, Gela, 2017)",
        "Speaker at the seminar «Strength and its expressions»: monitoring and training with PerfecTraining (Pegaso Telematic University, 2020)",
        "Speaker at PerfecTraining device presentations across Italy (Perugia, Catania, Jesi, La Spezia, Pontecagnano, FPI national centre)",
        "Testing of the entire women's national boxing team at the FPI national centre in Santa Maria degli Angeli, Irma Testa and Guido Vianello included (2018), and of the national foil fencers at the Jesi federal centre (2019)",
        "Speaker at the «Social wellbeing in cancer patients» conference, with the City of Gela and FAVO, at the Teatro Antidoto in Gela (2025)",
      ],
    },
    cpd: {
      kicker: "Continuing education",
      title: "Seminars & professional updates",
      items: [
        { year: "2015", label: "BLSD (Basic Life Support & Defibrillation)" },
        { year: "2014", label: "«Low back pain: a new approach to intervertebral disc decompression» (UNC)" },
        { year: "2011", label: "7th FPI seminar «Women's boxing», Assisi" },
        { year: "2010", label: "6th FPI seminar «Building strength in youth», Assisi" },
        { year: "2010", label: "FIPCF «Functional assessment and posture», Lecce" },
        { year: "2009", label: "FPI «Match Analysis, Milan 2009 World Championships», Assisi" },
        { year: "2007", label: "FIPCF «Motor load and physiological adaptations», Bari" },
      ],
    },
    sports: {
      kicker: "Sports",
      title: "Competitive sports",
      items: ["Boxing", "Athletics (high jump, shot put, 4×100, middle-distance)", "Basketball"],
    },
    book: {
      kicker: "The book",
      title: "«The Expressions of Strength»",
      subtitle: "Bosco's methodology for neuromuscular conditioning with the Bodygon",
      text: "My book gathers Carmelo Bosco's scientific legacy in neuromuscular conditioning and makes it operational, from theory to measurement in the gym, all the way to the Bodygon. The preface is by Sebastiano Corbu, coach of the Italian Olympic weightlifting national team.",
      meta: "Independently published, 2026 · ISBN 9798140366438",
      publisher: "Original Italian edition published by",
      cta: "Discover the book",
      image: "./assets/img/book-en.jpg",
      imageAlt: "The book «The Expressions of Strength» by Emanuele d'Ambrosio on a bookshelf",
    },
    footer: {
      rights: "All rights reserved. No part of the texts or images may be reproduced without permission.",
    },
    ui: { prev: "Previous photo", next: "Next photo", close: "Close", enlarge: "Enlarge", photos: "Course photos" },
    courses: {
      kicker: "What's new",
      title: "Bodygon courses and video courses",
      intro:
        "What I write about in the book, I now teach in the Bodygon courses: in person, at sports centres across Italy, and in three video courses I recorded. All of them are in Italian.",
      liveLabel: "In-person course · 2027",
      liveTitle: "Bodygon course «Le espressioni della forza»",
      liveText:
        "Sixteen hours of theory and practice over a weekend at a sports centre, taught by me. We start from the five expressions of strength and Bosco's methodology, then slow-tempo sets, isometric work and the triphasic method, and you use the Bodygon on yourself.",
      liveFacts: [
        "Ten Italian cities from January to May 2027: Perugia, Brindisi, Milan, Rome, Padua, Bologna, Naples, Caltagirone, La Spezia, Cagliari",
        "Twenty places per venue",
        "Certificate issued with CNS Libertas, a sports promotion body recognised by CONI",
        "The book «Le espressioni della forza» is included",
        "Taught in Italian",
      ],
      liveCta: "Discover the course",
      videoLabel: "Video courses",
      videoTitle: "Bodygon video courses «Le espressioni della forza»",
      videoText:
        "Three video courses I recorded for anyone who wants to study the method at their own pace, two and a half hours in total. Available all three together or one at a time. In Italian, with Italian subtitles.",
      videoItems: [
        "Power-based strength training · 1 h 21 min",
        "Functional isometrics and the specific static-dynamic method · 32 min",
        "Slow-tempo strength training · 37 min",
      ],
      videoCta: "Watch the video courses",
      videoAlt: "Emanuele d'Ambrosio at his desk presenting the three Bodygon video courses",
    },
    news: {
      kicker: "Updates",
      title: "Always learning",
      itemTitle: "Anatomy of Speed, Parisi certification",
      itemText:
        "These days I'm attending the first course held in Italy by Bill Parisi for the «Anatomy of Speed» certification.",
      captionPhoto: "Bill Parisi, AoS 2 Live Certification Course.",
      captionVideo: "A moment from the course.",
      captionDedication: "Bill Parisi's dedication in his «Anatomy of Speed» (Calzetti & Mariucci).",
    },
    contact: {
      kicker: "Contact",
      title: "Collaborations & projects",
      text: "For professional collaborations, teaching, education and projects.",
      location: "Antares Sporting Club, Gela (CL), Italy",
      emailLabel: "Get in touch",
    },
  },
};
