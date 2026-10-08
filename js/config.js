/* ==========================================================================
   SITE CONFIG — edit this file to update your details, links and work.
   Any text that appears in both languages is written as { en: "...", es: "..." }.
   ========================================================================== */
window.SITE = {
  name: "Antonio Hernández Valls",
  email: "ajhernandezvalls@gmail.com",
  // Phone is left off the public site on purpose (spam). Add it here to show it.
  phone: "",
  location: { en: "Valencia, Spain", es: "Valencia, España" },

  // Your photo, e.g. "assets/photo.jpg". Leave empty to show the placeholder.
  photo: "assets/img/photo.jpg",

  // Silent montage that plays behind the hero. Leave empty for the plain gradient.
  heroLoop: { video: "assets/video/hero-loop.mp4?v=6", poster: "assets/img/hero-poster.jpg?v=6" },

  // CV PDF per language (built from tools/cv/*.html).
  cv: { en: "assets/Antonio Hernandez Valls CV EN.pdf", es: "assets/Antonio Hernandez Valls CV ES.pdf" },

  // Showreel: fill ONE of these. youtube = the ID after "v=" in the URL.
  // While empty, the hero button says "See my work" and scrolls to the work section.
  // visible: false hides the button entirely (set to true to reveal the showreel).
  showreel: { visible: false, youtube: "", vimeo: "", file: "assets/video/showreel.mp4?v=3", thumb: "assets/img/showreel.jpg" },

  // Social links. Leave url as "" to hide one.
  socials: [
    { label: "LinkedIn",  url: "" },
    { label: "Instagram", url: "" },
    { label: "TikTok",    url: "" },
    { label: "YouTube",   url: "" },
    { label: "Twitch",    url: "" }
  ],

  tools: [
    "DaVinci Resolve Studio", "Adobe Premiere Pro", "After Effects", "Motion Graphics", "Photography", "Photoshop",
    "Blender", "CapCut", "Adobe Audition", "iZotope", "HubSpot CRM",
    "Google Analytics (GA4)", "Email Marketing", "Microsoft Office"
  ],

  // Content only shown on the CV page (cv.html). Experience and education below are shared.
  cvPage: {
    role: { en: "Marketing Specialist | Video Editor | Content Creator", es: "Especialista en Marketing | Editor de Vídeo | Creador de Contenido" },
    summary: {
      en: "Freelance video editor and digital content creator with 6 years of experience producing short films, indie features, business ads and short and long-form social videos for TikTok, Instagram, YouTube and Twitch, with more than one million total views. Experienced in motion graphics with After Effects, photography, sound recording and design, HubSpot CRM and Google Analytics (GA4) for digital marketing tracking. Currently studying a Master's in Generative AI, specialising in database administration, automation, workflows and programming.",
      es: "Editor de vídeo freelance y creador de contenido digital con 6 años de experiencia en la producción de cortometrajes, películas indie, anuncios para negocios y vídeos de redes sociales de formato corto y largo para TikTok, Instagram, YouTube y Twitch, con más de un millón de visualizaciones totales. Experiencia en motion graphics con After Effects, fotografía, grabación y diseño de sonido, HubSpot CRM y Google Analytics (GA4) para el seguimiento de marketing digital. Actualmente cursando el Máster de IA Generativa, con especialización en administración de bases de datos, creación de automatizaciones, workflows y programación."
    },
    skills: [
      { label: { en: "Core skills", es: "Competencias técnicas" }, value: { en: "Video editing, motion graphics, sound recording, sound design, camera operation (Panasonic GH5), photography, content creation, social media marketing, digital marketing analytics", es: "Edición de vídeo, motion graphics, grabación de sonido, diseño de sonido, operación de cámara (Panasonic GH5), fotografía, creación de contenido, marketing en redes sociales, analítica de marketing digital" } },
      { label: { en: "Video & design", es: "Vídeo y diseño" }, value: { en: "DaVinci Resolve Studio, Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop, Blender, CapCut", es: "DaVinci Resolve Studio, Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop, Blender, CapCut" } },
      { label: { en: "Motion graphics", es: "Motion graphics" }, value: { en: "Animated titles, graphics and visual effects in Adobe After Effects", es: "Títulos animados, grafismo y efectos visuales en Adobe After Effects" } },
      { label: { en: "Audio", es: "Audio" }, value: { en: "Adobe Audition, iZotope · on-set recording, voice-over, SFX", es: "Adobe Audition, iZotope · grabación en rodaje, voice over, efectos" } },
      { label: { en: "Social platforms", es: "Redes sociales" }, value: { en: "TikTok, Instagram, YouTube, Twitch", es: "TikTok, Instagram, YouTube, Twitch" } },
      { label: { en: "Marketing & analytics", es: "Marketing y analítica" }, value: { en: "HubSpot CRM, Google Analytics (GA4), email marketing, social media content, data analysis", es: "HubSpot CRM, Google Analytics (GA4), email marketing, contenido para redes sociales, análisis de datos" } },
      { label: { en: "Office", es: "Ofimática" }, value: { en: "Microsoft Word, Excel, Access, PowerPoint", es: "Microsoft Word, Excel, Access, PowerPoint" } },
      { label: { en: "Key skills", es: "Competencias clave" }, value: { en: "Project management, teamwork, communication, organisation, problem solving, adaptability, creativity, working under pressure, positive attitude, eagerness to learn", es: "Administración de proyectos, trabajo en equipo, comunicación, organización, resolución de problemas, adaptabilidad, creatividad, manejo del estrés, actitud positiva, capacidad de aprendizaje" } }
    ],
    languages: { en: "English: native · Spanish: native", es: "Inglés: nativo · Español: nativo" }
  },

  // Equipment you own and operate.
  gear: [
    { en: "Panasonic Lumix GH5 (own)", es: "Panasonic Lumix GH5 (propia)" },
    { en: "Shure SM7B microphone (own)", es: "Micrófono Shure SM7B (propio)" },
    { en: "Field microphones (own)", es: "Micrófonos de campo (propios)" }
  ],

  experience: [
    {
      dates: { en: "Oct 2020 — Present", es: "Oct 2020 — Actualidad" },
      role: { en: "Freelance Video Editor", es: "Editor de Vídeo Freelance" },
      org: { en: "Self-employed", es: "Autónomo" },
      points: {
        en: [
          "Edit short films, indie features, business ads, marketing campaigns and short and long-form social videos.",
          "Work with production teams, directors and producers to deliver a finished cut they're happy with.",
          "Track digital marketing with Google Analytics (GA4) and manage contacts in HubSpot CRM."
        ],
        es: [
          "Edición de cortometrajes, películas indie, anuncios para negocios, campañas de marketing y vídeos de redes de formato corto y largo.",
          "Colaboración con equipos de producción, directores y productores para asegurar un producto final satisfactorio.",
          "Seguimiento de marketing digital con Google Analytics (GA4) y gestión de CRM en HubSpot."
        ]
      }
    },
    {
      dates: { en: "2020 — Present", es: "2020 — Actualidad" },
      role: { en: "Content Creator", es: "Creador de Contenido" },
      org: { en: "Personal channels · TikTok, Instagram, YouTube, Twitch", es: "Canales propios · TikTok, Instagram, YouTube, Twitch" },
      tag: { en: "Personal project", es: "Proyecto personal" },
      points: {
        en: [
          "Plan, film, edit and publish my own short and long-form content and livestreams.",
          "More than 1 million total views across platforms.",
          "Test hooks, formats and posting times, and learn from what the analytics show."
        ],
        es: [
          "Planificación, grabación, edición y publicación de contenido propio y directos.",
          "Más de un millón de visualizaciones totales entre plataformas.",
          "Pruebas de ganchos, formatos y horarios, aprendiendo de lo que muestran las métricas."
        ]
      }
    },
    {
      dates: { en: "Oct 2021 — Sep 2024", es: "Oct 2021 — Sep 2024" },
      role: { en: "Sound Designer", es: "Diseñador de Sonido" },
      org: { en: "Freelance · Film & video productions", es: "Freelance · Producciones audiovisuales" },
      points: {
        en: [
          "Recorded on-set dialogue, voice-over, ambience and sound effects.",
          "Created, tweaked and edited SFX to build immersive soundscapes."
        ],
        es: [
          "Grabación de diálogo en escena, voice over, sonidos de ambiente y efectos de sonido.",
          "Creación, ajuste y edición de efectos para construir paisajes sonoros inmersivos."
        ]
      }
    }
  ],

  education: [
    {
      title: { en: "Master's in Generative AI", es: "Máster en IA Generativa" },
      org: { en: "EBIS · Universidad de Vitoria-Gasteiz", es: "EBIS · Universidad de Vitoria-Gasteiz" },
      dates: { en: "2026 — 2027 (expected)", es: "2026 — 2027 (previsto)" }
    },
    {
      title: { en: "Bachelor's in Creative Production for Film, Television and Digital Media", es: "Grado en Producción Creativa de Cine, TV y Medios Digitales" },
      org: { en: "University of Northampton, UK", es: "Universidad de Northampton, Reino Unido" },
      dates: { en: "2020 — 2024", es: "2020 — 2024" }
    }
  ],

  // Work types to hide from the site (cards and their filter button). The items stay below.
  // Remove "short" from this list to bring the Short-form section back.
  hiddenTypes: ["short"],

  // Films that have both a Google Drive link and a local copy play from Drive while this is true.
  // Set to false to play the local copies instead (e.g. if Drive access is ever lost).
  useDrive: true,

  /* WORK — type: "long" (16:9), "short" (9:16), "campaign", "motion" or "sound".
     loop: optional silent clip that plays in the card instead of the thumbnail (good for short motion pieces).
     Video: set youtube (ID), vimeo (ID), drive (Google Drive file ID, shared as "anyone with the link") or file ("assets/clip.mp4"). Sound: set audio ("assets/x.mp3").
     thumb: optional image path. Without it, a styled placeholder frame is shown.
     Items with placeholder: true are drafts — replace them with your real work. */
  work: [
    {
      type: "long", featured: true,
      title: { en: "EVEN", es: "EVEN" },
      meta: { en: "My film · Writer, director, editor & sound", es: "Mi película · Guion, dirección, montaje y sonido" },
      desc: {
        en: "A 3-minute short film I wrote and directed. I led it from concept to final mix, handling the edit, sound recording and sound design, in collaboration with a camera operator.",
        es: "Cortometraje de 3 minutos escrito y dirigido por mí. Lo llevé desde el concepto hasta la mezcla final, encargándome del montaje, la grabación y el diseño de sonido, en colaboración con un operador de cámara."
      },
      file: "assets/video/even.mp4", thumb: "assets/img/even.jpg"
    },
    {
      type: "long",
      title: { en: "RUMBLE", es: "RUMBLE" },
      meta: { en: "Short film · Edit, sound design & recording", es: "Cortometraje · Montaje, diseño de sonido y grabación" },
      desc: {
        en: "A 7-minute short drama shot in the UK, cutting between colour and black-and-white sequences. I edited it, recorded the sound on set and built the sound design.",
        es: "Cortometraje dramático de 7 minutos rodado en Reino Unido, que alterna secuencias en color y en blanco y negro. Hice el montaje, grabé el sonido en rodaje y creé el diseño sonoro."
      },
      file: "assets/video/rumble.mp4", thumb: "assets/img/rumble.jpg"
    },
    {
      type: "campaign",
      title: { en: "Frank Bruno Foundation — Promo / Documentary", es: "Frank Bruno Foundation — Promo / Documental" },
      meta: { en: "Charity promo documentary · Sound recording & design", es: "Promo documental para ONG · Grabación y diseño de sonido" },
      desc: {
        en: "A short promo documentary for the Frank Bruno Foundation, the UK charity that uses non-contact boxing to support young people's mental health. Interviews filmed in the ring, cut with training and fight-night footage. I recorded the interview sound and built the sound design.",
        es: "Documental promocional para la Frank Bruno Foundation, la ONG británica que usa el boxeo sin contacto para apoyar la salud mental de los jóvenes. Entrevistas grabadas en el ring, combinadas con imágenes de entrenamiento y de veladas. Me encargué de la grabación de sonido de las entrevistas y del diseño sonoro."
      },
      file: "assets/video/frank-bruno.mp4", thumb: "assets/img/frank-bruno.jpg"
    },
    {
      type: "campaign",
      title: { en: "Close Encounters — Shop ad", es: "Close Encounters — Anuncio" },
      meta: { en: "Client ad · Sound recording & design", es: "Anuncio para cliente · Grabación y diseño de sonido" },
      desc: {
        en: "A 30-second spot for Close Encounters, an independent comic and graphic-novel shop in Northampton, UK. I recorded the sound on location and designed the soundtrack, including the sci-fi effects.",
        es: "Spot de 30 segundos para Close Encounters, una tienda independiente de cómics y novelas gráficas en Northampton (Reino Unido). Grabé el sonido en localización y diseñé la banda sonora, incluidos los efectos de ciencia ficción."
      },
      file: "assets/video/close-encounters.mp4", thumb: "assets/img/close-encounters.jpg"
    },
    {
      type: "long",
      title: { en: "Things In Life", es: "Things In Life" },
      meta: { en: "Short film · Sound recording & design", es: "Cortometraje · Grabación y diseño de sonido" },
      desc: {
        en: "A 7-minute drama. I recorded the on-set dialogue and location sound, and built the sound design.",
        es: "Drama de 7 minutos. Grabé el diálogo en rodaje y el sonido de localización, y creé el diseño sonoro."
      },
      drive: "1Ub6nNuxw-cHI9cgENIFptE5YlQDQg1bp", file: "assets/video/things-in-life.mp4", thumb: "assets/img/things-in-life.jpg"
    },
    {
      type: "long",
      title: { en: "From Darkness to Light", es: "From Darkness to Light" },
      meta: { en: "Short film · Sound recording & design", es: "Cortometraje · Grabación y diseño de sonido" },
      desc: {
        en: "A 7-minute short film shot in widescreen. I recorded the on-set audio and built the sound design.",
        es: "Cortometraje de 7 minutos rodado en formato panorámico. Grabé el audio en rodaje y creé el diseño sonoro."
      },
      drive: "1UwC_lMK6r-DBMlytZtuamV-9BGHxI_Iv", file: "assets/video/from-darkness-to-light.mp4", thumb: "assets/img/from-darkness-to-light.jpg"
    },
    {
      type: "long",
      title: { en: "Oblivion", es: "Oblivion" },
      meta: { en: "Short film · Sound recording & design", es: "Cortometraje · Grabación y diseño de sonido" },
      desc: {
        en: "An 8-minute drama with a cold, quiet look. I recorded the production sound and did some of the sound design.",
        es: "Drama de 8 minutos con una estética fría y contenida. Grabé el sonido directo y participé en el diseño sonoro."
      },
      file: "assets/video/oblivion.mp4", thumb: "assets/img/oblivion.jpg"
    },
    {
      type: "long",
      title: { en: "Surrealism", es: "Surrealism" },
      meta: { en: "Short film · Sound & creative input", es: "Cortometraje · Sonido y aportación creativa" },
      desc: {
        en: "A 9-minute surrealist short film. I handled the sound and pitched ideas during development.",
        es: "Cortometraje surrealista de 9 minutos. Me encargué del sonido y aporté ideas durante el desarrollo."
      },
      drive: "1Q2uOIVyA90ln8lPeuSpRiIFeHuTovHTL", file: "assets/video/surrealism.mp4", thumb: "assets/img/surrealist-fmp.jpg?v=2"
    },
    {
      type: "motion",
      title: { en: "Motion Graphics Intro", es: "Motion Graphics Intro" },
      meta: { en: "Motion graphics · After Effects", es: "Motion graphics · After Effects" },
      desc: {
        en: "An animated intro for an upcoming video on my YouTube channel. Character cards slide in on bold colour panels before cutting into gameplay.",
        es: "Intro animada para un próximo vídeo de mi canal de YouTube. Las fichas de personajes entran sobre paneles de colores antes de pasar al gameplay."
      },
      file: "assets/video/youtube-intro.mp4", loop: "assets/video/youtube-intro-loop.mp4", thumb: "assets/img/youtube-intro.jpg"
    },
    {
      type: "short",
      title: { en: "Resident Evil stream clip", es: "Clip de Resident Evil" },
      meta: { en: "Twitch highlight → YouTube Short", es: "Highlight de Twitch → YouTube Short" },
      desc: {
        en: "A livestream moment recut as a vertical Short for my channel.",
        es: "Un momento de directo reeditado como Short vertical para mi canal."
      },
      youtube: "no1vJ6sV4ms", thumb: "https://i.ytimg.com/vi/no1vJ6sV4ms/oardefault.jpg"
    },
    {
      type: "short",
      title: { en: "Sacude Ratas™", es: "Sacude Ratas™" },
      meta: { en: "YouTube Short · Edit, titles & captions", es: "YouTube Short · Montaje, títulos y subtítulos" },
      desc: {
        en: "A short-form game video for my channel, built to hook in the first second: a big kinetic title, a custom on-screen meter and bold word-by-word captions.",
        es: "Vídeo corto de un juego para mi canal, pensado para enganchar en el primer segundo: título grande y dinámico, un medidor personalizado en pantalla y subtítulos palabra a palabra."
      },
      youtube: "AWYF2cbSQR0", thumb: "https://i.ytimg.com/vi/AWYF2cbSQR0/oardefault.jpg"
    },
    {
      type: "short",
      title: { en: "Minecraft's hardest modpack", es: "El modpack MÁS difícil de Minecraft" },
      meta: { en: "YouTube Short · Creator content", es: "YouTube Short · Contenido de creador" },
      desc: {
        en: "Creator-style Short for my channel: facecam stacked over gameplay, with my live reactions carrying the story.",
        es: "Short en formato de creador para mi canal: facecam sobre el gameplay y mis reacciones en directo llevando la historia."
      },
      youtube: "rkBNjVHMwas", thumb: "https://i.ytimg.com/vi/rkBNjVHMwas/oardefault.jpg"
    },
    {
      type: "long",
      title: { en: "Sleep Paralysis", es: "Parálisis del sueño" },
      meta: { en: "Experimental piece · Edit & VFX", es: "Pieza experimental · Montaje y VFX" },
      desc: {
        en: "A personal creative piece about the moment you wake up and can't move. Animated noise mattes, red light and sound carry the dread.",
        es: "Pieza creativa personal sobre ese momento en el que despiertas y no puedes moverte. Máscaras de ruido animadas, luz roja y sonido construyen la angustia."
      },
      file: "assets/video/sleep-paralysis.mp4", thumb: "assets/img/sleep-paralysis.jpg"
    },
    {
      type: "sound",
      title: { en: "Original soundscape", es: "Paisaje sonoro original" },
      meta: { en: "Sound design · Recording & mix", es: "Diseño de sonido · Grabación y mezcla" },
      desc: {
        en: "An original soundscape built from recorded ambience and designed effects.",
        es: "Paisaje sonoro original construido con ambientes grabados y efectos diseñados."
      },
      audio: "assets/audio/soundscape.mp3", thumb: "assets/img/soundscape-wave.png"
    }
  ]
};
