/* ABBA Family Therapy — bilingual EN/ES translations */
(function () {
  "use strict";

  var STORAGE_KEY = "abba.lang";
  var DEFAULT_LANG = "en";

  var translations = {
    en: {
      // Document
      "document.title": "ABBA Family Therapy | ABA in Miami-Dade & Broward",
      "meta.description":
        "Individualized, evidence-based ABA services that help children with autism and ADHD learn, grow, and reach their fullest potential. Bilingual care in English and Spanish, serving families across Miami-Dade and Broward, FL.",
      "skip.link": "Skip to content",

      // Header / Nav
      "nav.about": "About",
      "nav.services": "Services",
      "nav.faq": "FAQ",
      "nav.langToggle": "En Español",
      "nav.langToggleAria": "Cambiar idioma a español",
      "nav.callAria": "Call us",
      "nav.cta": "Free Consultation",

      // Hero
      "hero.eyebrow": "ABA Therapy · Doral, FL",
      "hero.line1": "Empowering Children.",
      "hero.line2": "Supporting Families.",
      "hero.line3": "Across Miami-Dade & Broward.",
      "hero.lead":
        "Individualized, evidence-based ABA services that help children learn, grow, and reach their fullest potential, while we support the families who love them. At home, at school, or in the community, in English or Spanish, across Miami-Dade and Broward.",
      "hero.cta1": "Free Consultation",
      "hero.cta2": "See our services",
      "hero.imgAlt":
        "ABBA Family Therapy heart tree. A symbol of growth, love, and family.",

      // Trust strip
      "trust.bcba": "<strong>BCBA-led</strong> care",
      "trust.insurance": "<strong>Most private insurances</strong> accepted",
      "trust.area": "Serving <strong>Miami-Dade &amp; Broward</strong>",
      "trust.bilingual": "Bilingual: <strong>English / Español</strong>",

      // About
      "about.heading": "Hi, I'm Natalia.",
      "about.p1":
        "I'm a BCBA and the founder of ABBA Family Therapy. I started this practice because I wanted something more personal, more intentional, more family-centered. I didn't want families to feel like just another case, with services that look correct on paper but don't always feel meaningful in real life. Clinical quality and human connection can and should exist together.",
      "about.p2":
        "If you're up at 9pm replaying the day in your head, wondering if you handled something the right way, I see you. The parents I work with love their children deeply and still feel overwhelmed, sometimes isolated, unsure where to start in an ocean of information. That's exactly who ABBA was built for.",
      "about.tagline":
        "You don't have to figure it out all at once. We take it step by step. You don't have to carry it alone.",
      "about.imgAria": "Placeholder for team or office photo",
      "about.imgPlaceholder": "Image placeholder",
      "about.imgHint": "Team or environment photography",

      // Services
      "services.heading": "Our ABA Services",
      "services.intro":
        "Wherever your child learns and grows, we meet them there.",
      "services.inHome.title": "In-Home ABA Therapy",
      "services.inHome.body":
        "Therapy delivered right where your child lives. We work with your daily routines, integrate strategies into family life, and coach parents in real time.",
      "services.school.title": "School-Based ABA Therapy",
      "services.school.body":
        "We collaborate with public and private schools across Miami-Dade and Broward to support your child during the school day, partnering with teachers and staff.",
      "services.community.title": "Community-Based ABA",
      "services.community.body":
        "Therapy out in the world: at the playground, the grocery store, social settings. Real skills, practiced in the real situations your child will encounter every day.",
      "services.parent.title": "Parent Training",
      "services.parent.body":
        "Therapy can't only happen when a therapist is in the room. You're the one who carries progress into everyday life, so we train and coach you alongside the work. Parents aren't optional, you're essential.",
      "services.es.title": "Servicios en Español",
      "services.es.body":
        "En ABBA Family Therapy, ofrecemos servicios completamente en español para familias hispanohablantes. Comunicarse con nosotros en su idioma es completamente bienvenido.",

      // Why ABBA
      "why.heading": "Why Choose ABBA",
      "why.intro": "What you can expect from us, every day.",
      "why.1.title": "Immediate, compassionate response",
      "why.1.body":
        "You won't wait days for a reply. When you reach out, you hear back from a real person within one business day.",
      "why.2.title": "Family-centered care",
      "why.2.body":
        "You know your child best. We listen, co-create the plan with you, and train you alongside the work. Parents are part of every step.",
      "why.3.title": "Faith-inspired ethics",
      "why.3.body":
        "ABBA means God the Father. Faith shapes how we see people, with patience, humility, and compassion. You'll feel it in how we treat your family, not in how we talk about it.",
      "why.4.title": "Plans that adjust as your child grows",
      "why.4.body":
        "Every child is different. The plan is individualized from day one and adjusts as your child grows. What works for one child won't work for another, and we won't pretend otherwise.",
      "why.5.title": "Bilingual: English & Español",
      "why.5.body":
        "Sessions, intake calls, and family meetings can happen in whichever language feels most comfortable. Your home language is never a barrier.",

      // How
      "how.heading": "How It Works",
      "how.intro":
        "Here's what working with us looks like, step by step.",
      "how.1.title": "Assess",
      "how.1.body":
        "We start with questions and stories. Your child's age, diagnosis, concerns, goals, your insurance. There are no wrong questions. We take the time to understand the whole child, not just the diagnosis.",
      "how.2.title": "Plan",
      "how.2.body":
        "Based on the initial assessment, we design an individualized plan with goals tailored to your child. We explain the strategy clearly. Parents are involved from the start, because the plan only works when you understand it.",
      "how.3.title": "Implement",
      "how.3.body":
        "A registered behavior technician (RBT) leads sessions under BCBA supervision, working from your child's plan. We teach communication, work through transitions, reinforce positive participation. Real skills, in real situations.",
      "how.4.title": "Progress",
      "how.4.body":
        "We track every step. We celebrate the small wins. We're honest about what we see and adjust the plan when something isn't landing. Progress isn't a straight line, and we'll always be transparent with you about that.",

      // Stats
      "stats.heading": "Why early intervention matters",
      "stats.intro":
        "The earlier we start, the more meaningful the difference.",
      "stats.1.label": "U.S. children identified with autism",
      "stats.2.label": "U.S. children diagnosed with ADHD",
      "stats.3.label": "Higher rate of autism in boys vs. girls",
      "stats.4.num": "Earlier",
      "stats.4.label":
        "The right time to start. Early intervention changes the trajectory.",
      "stats.source":
        "Source: U.S. Centers for Disease Control and Prevention",

      // Testimonials
      "testimonials.heading": "What Families Say",
      "testimonials.1.body":
        "ABBA Family Therapy has been a blessing for our family. The team is incredibly caring and knowledgeable. We've seen so much growth and confidence in our son.",
      "testimonials.1.cite": "The Ramirez Family",
      "testimonials.2.body":
        "The support and guidance we receive from ABBA Family Therapy is exceptional. Our daughter is thriving in ways we never imagined. We are so grateful.",
      "testimonials.2.cite": "The Morillo Family",

      // FAQ
      "faq.heading": "Frequently Asked Questions",
      "faq.q1": "Do you accept insurance?",
      "faq.a1":
        "We work with most private insurance plans. The first call usually covers your insurance information along with your child's age, diagnosis, and what's bringing you here. There are no wrong questions, and we'll walk you through every part of the process.",
      "faq.q2": "What ages and conditions do you serve?",
      "faq.a2":
        "We work primarily with children diagnosed with autism (ASD) or ADHD. Other developmental concerns may also be eligible. The earlier we start, the better, but it's never too late to begin.",
      "faq.q3": "Where do sessions happen?",
      "faq.a3":
        "We come to you. Sessions can take place in your home, at your child's school, or in the community, wherever your child learns and grows. We serve families across Miami-Dade and Broward.",
      "faq.q4": "How long does ABA therapy typically last?",
      "faq.a4":
        "Every child is different. Some families work with us for several months, others stay for years. The plan is individualized from the initial assessment and we adjust continuously based on how your child is progressing. We'll always be honest with you about what we see.",
      "faq.q5": "Will I need to be involved?",
      "faq.a5":
        "Yes. In ABA, parent involvement isn't optional, it's essential. As BCBAs we're required to train parents, because therapy can't only happen when a therapist is in the room. You're the person who knows your child best, and you're the one who carries progress into every part of daily life. Without that consistency, even good progress can regress when sessions end. We'll train and coach you alongside the work.",
      "faq.q6": "¿Ofrecen servicios en español?",
      "faq.a6":
        "Sí. Hablamos español y trabajamos con muchas familias hispanohablantes. Comunicarse con nosotros en su idioma es completamente bienvenido.",

      // Callback
      "callback.imgAlt":
        "Heart tree. A symbol of the care and growth at the heart of ABBA Family Therapy.",
      "callback.quote":
        "Behavior is communication. Our job is to listen, then teach the words.",

      // CTA
      "cta.heading": "Whenever you're ready, we'll be here.",
      "cta.body":
        "You don't have to figure it out all at once. Send a question, a worry, or \u201cI have no idea where to start.\u201d We take it step by step. You won't have to carry it alone.",
      "cta.button": "Free Consultation",

      // Contact
      "contact.eyebrow": "Contact Us",
      "contact.heading": "We're Here to Help",
      "contact.intro":
        "Send a message, give us a call, or stop by. Natalia or someone on her team will respond within one business day. There are no wrong questions, just send what's on your mind.",
      "contact.photoAria": "Photo of Natalia or therapist with child",
      "contact.photoHint": "Photo of Natalia or therapist with child",
      "contact.callAria": "Call 786-752-7992",
      "contact.altPhoneLabel": "Or call",
      "contact.label.call": "Call",
      "contact.label.email": "Email",
      "contact.label.visit": "Visit",
      "contact.address": "8180 NW 36th St. Ste 228<br />Doral, FL 33166",
      "contact.formHeading": "Schedule a Consultation",
      "contact.formLead":
        "Tell us a bit about your child and how we can help.",
      "contact.field.name": "Full Name",
      "contact.field.email": "Email Address",
      "contact.field.phone": "Phone Number",
      "contact.field.message": "Your Message",
      "contact.field.placeholder":
        "Your child's age, what's bringing you here, anything you'd like us to know.",
      "contact.submit": "Send message",
      "contact.formNote":
        "Layout placeholder. Wire to your backend or form service when ready.",
      "contact.detailsHeading": "Hours & Founder",
      "contact.hoursLabel": "Hours",
      "contact.hoursValue":
        "Mon\u2013Fri, 8:00 a.m. to 6:00 p.m.<br />Sat by appointment",
      "contact.areaLabel": "Service area",
      "contact.areaValue": "Miami-Dade County<br />Broward County",
      "contact.founderTitle": "MS, BCBA / Founder",

      // Footer
      "footer.tagline":
        "Empowering Children. Supporting Families. Across Miami-Dade & Broward.",
      "footer.visit": "Visit",
      "footer.follow": "Follow",
      "footer.pages": "Pages",
      "footer.about": "About",
      "footer.services": "Services",
      "footer.faq": "FAQ",
      "footer.contact": "Contact",
      "footer.rights": "All rights reserved.",
      "footer.serving": "Serving Miami-Dade and Broward, FL.",

      // Sticky call
      "sticky.callAria": "Call ABBA Family Therapy",
    },

    es: {
      // Document
      "document.title":
        "ABBA Family Therapy | ABA en Miami-Dade y Broward",
      "meta.description":
        "Servicios de ABA individualizados y basados en evidencia que ayudan a niños con autismo y TDAH a aprender, crecer y alcanzar su máximo potencial. Atención bilingüe en inglés y español, sirviendo a familias en Miami-Dade y Broward, FL.",
      "skip.link": "Saltar al contenido",

      // Header / Nav
      "nav.about": "Nosotros",
      "nav.services": "Servicios",
      "nav.faq": "Preguntas",
      "nav.langToggle": "In English",
      "nav.langToggleAria": "Switch language to English",
      "nav.callAria": "Llámenos",
      "nav.cta": "Consulta Gratuita",

      // Hero
      "hero.eyebrow": "Terapia ABA · Doral, FL",
      "hero.line1": "Empoderando a los Niños.",
      "hero.line2": "Apoyando a las Familias.",
      "hero.line3": "En Miami-Dade y Broward.",
      "hero.lead":
        "Servicios de ABA individualizados y basados en evidencia que ayudan a los niños a aprender, crecer y alcanzar su máximo potencial, mientras apoyamos a las familias que los aman. En casa, en la escuela o en la comunidad, en inglés o español, en Miami-Dade y Broward.",
      "hero.cta1": "Consulta Gratuita",
      "hero.cta2": "Ver nuestros servicios",
      "hero.imgAlt":
        "El árbol corazón de ABBA Family Therapy. Símbolo de crecimiento, amor y familia.",

      // Trust strip
      "trust.bcba": "Atención dirigida por <strong>BCBA</strong>",
      "trust.insurance":
        "<strong>La mayoría de seguros privados</strong> aceptados",
      "trust.area": "Sirviendo a <strong>Miami-Dade y Broward</strong>",
      "trust.bilingual": "Bilingüe: <strong>English / Español</strong>",

      // About
      "about.heading": "Hola, soy Natalia.",
      "about.p1":
        "Soy BCBA y fundadora de ABBA Family Therapy. Comencé esta práctica porque quería algo más personal, más intencional, más centrado en la familia. No quería que las familias se sintieran como un caso más, con servicios que se ven correctos en el papel pero no siempre se sienten significativos en la vida real. La calidad clínica y la conexión humana pueden y deben existir juntas.",
      "about.p2":
        "Si está despierta a las 9 de la noche repasando el día en su mente, preguntándose si manejó algo de la manera correcta, le veo. Los padres con los que trabajo aman profundamente a sus hijos y aun así se sienten abrumados, a veces aislados, sin saber por dónde empezar en un océano de información. Para ese tipo de familia es que ABBA fue creada.",
      "about.tagline":
        "No tiene que resolverlo todo de una vez. Vamos paso a paso. No tiene que cargar con esto sola.",
      "about.imgAria": "Marcador para foto del equipo o de la oficina",
      "about.imgPlaceholder": "Marcador de imagen",
      "about.imgHint": "Fotografía del equipo o del entorno",

      // Services
      "services.heading": "Nuestros Servicios ABA",
      "services.intro":
        "Donde sea que su hijo aprenda y crezca, ahí estamos.",
      "services.inHome.title": "Terapia ABA en el Hogar",
      "services.inHome.body":
        "Terapia entregada justo donde su hijo vive. Trabajamos con sus rutinas diarias, integramos estrategias en la vida familiar y guiamos a los padres en tiempo real.",
      "services.school.title": "Terapia ABA en la Escuela",
      "services.school.body":
        "Colaboramos con escuelas públicas y privadas en Miami-Dade y Broward para apoyar a su hijo durante la jornada escolar, trabajando junto a maestros y personal.",
      "services.community.title": "ABA en la Comunidad",
      "services.community.body":
        "Terapia en el mundo real: en el parque, el supermercado, en entornos sociales. Habilidades reales, practicadas en las situaciones reales que su hijo enfrentará cada día.",
      "services.parent.title": "Entrenamiento para Padres",
      "services.parent.body":
        "La terapia no puede ocurrir solo cuando hay un terapeuta en la habitación. Usted es quien lleva el progreso a la vida diaria, así que le entrenamos y le acompañamos junto al trabajo. Los padres no son opcionales, son esenciales.",
      "services.es.title": "Servicios en Español",
      "services.es.body":
        "En ABBA Family Therapy, ofrecemos servicios completamente en español para familias hispanohablantes. Comunicarse con nosotros en su idioma es completamente bienvenido.",

      // Why ABBA
      "why.heading": "Por Qué Elegir ABBA",
      "why.intro": "Lo que puede esperar de nosotros, cada día.",
      "why.1.title": "Respuesta inmediata y compasiva",
      "why.1.body":
        "No esperará días por una respuesta. Cuando se comunique con nosotros, recibirá respuesta de una persona real en menos de un día hábil.",
      "why.2.title": "Atención centrada en la familia",
      "why.2.body":
        "Usted conoce a su hijo mejor que nadie. Escuchamos, creamos el plan junto con usted, y le entrenamos durante el trabajo. Los padres son parte de cada paso.",
      "why.3.title": "Ética inspirada en la fe",
      "why.3.body":
        "ABBA significa Dios el Padre. La fe da forma a cómo vemos a las personas, con paciencia, humildad y compasión. Lo sentirá en cómo tratamos a su familia, no en cómo lo hablamos.",
      "why.4.title": "Planes que se ajustan a medida que su hijo crece",
      "why.4.body":
        "Cada niño es diferente. El plan es individualizado desde el primer día y se ajusta a medida que su hijo crece. Lo que funciona para un niño no funciona para otro, y no fingiremos lo contrario.",
      "why.5.title": "Bilingüe: English & Español",
      "why.5.body":
        "Las sesiones, llamadas iniciales y reuniones familiares pueden realizarse en el idioma que se sienta más cómodo. El idioma de su hogar nunca es una barrera.",

      // How
      "how.heading": "Cómo Funciona",
      "how.intro":
        "Así se ve trabajar con nosotros, paso a paso.",
      "how.1.title": "Evaluar",
      "how.1.body":
        "Comenzamos con preguntas y conversaciones. La edad de su hijo, el diagnóstico, sus preocupaciones, sus metas, su seguro. No hay preguntas equivocadas. Nos tomamos el tiempo para entender al niño completo, no solo al diagnóstico.",
      "how.2.title": "Planificar",
      "how.2.body":
        "Basándonos en la evaluación inicial, diseñamos un plan individualizado con metas adaptadas a su hijo. Le explicamos la estrategia con claridad. Los padres participan desde el inicio, porque el plan solo funciona cuando usted lo entiende.",
      "how.3.title": "Implementar",
      "how.3.body":
        "Un técnico registrado en conducta (RBT) dirige las sesiones bajo la supervisión de un BCBA, siguiendo el plan de su hijo. Enseñamos comunicación, trabajamos las transiciones, reforzamos la participación positiva. Habilidades reales, en situaciones reales.",
      "how.4.title": "Progreso",
      "how.4.body":
        "Hacemos seguimiento de cada paso. Celebramos las pequeñas victorias. Somos honestos sobre lo que vemos y ajustamos el plan cuando algo no está dando resultado. El progreso no es una línea recta, y siempre seremos transparentes con usted sobre eso.",

      // Stats
      "stats.heading": "Por qué importa la intervención temprana",
      "stats.intro":
        "Cuanto antes empecemos, más significativa es la diferencia.",
      "stats.1.label": "Niños en EE.UU. identificados con autismo",
      "stats.2.label": "Niños en EE.UU. diagnosticados con TDAH",
      "stats.3.label": "Tasa de autismo más alta en niños vs. niñas",
      "stats.4.num": "Antes",
      "stats.4.label":
        "El momento adecuado para empezar. La intervención temprana cambia la trayectoria.",
      "stats.source":
        "Fuente: Centros para el Control y la Prevención de Enfermedades de EE.UU.",

      // Testimonials
      "testimonials.heading": "Lo Que Dicen las Familias",
      "testimonials.1.body":
        "ABBA Family Therapy ha sido una bendición para nuestra familia. El equipo es increíblemente cariñoso y experto. Hemos visto mucho crecimiento y confianza en nuestro hijo.",
      "testimonials.1.cite": "Familia Ramírez",
      "testimonials.2.body":
        "El apoyo y la orientación que recibimos de ABBA Family Therapy son excepcionales. Nuestra hija está prosperando de maneras que nunca imaginamos. Estamos muy agradecidos.",
      "testimonials.2.cite": "Familia Morillo",

      // FAQ
      "faq.heading": "Preguntas Frecuentes",
      "faq.q1": "¿Aceptan seguro médico?",
      "faq.a1":
        "Trabajamos con la mayoría de planes de seguro privados. La primera llamada usualmente cubre la información de su seguro junto con la edad de su hijo, el diagnóstico y qué le trae aquí. No hay preguntas equivocadas, y le acompañamos en cada parte del proceso.",
      "faq.q2": "¿Qué edades y condiciones atienden?",
      "faq.a2":
        "Trabajamos principalmente con niños diagnosticados con autismo (TEA) o TDAH. Otras preocupaciones del desarrollo también pueden ser elegibles. Mientras antes empecemos, mejor, pero nunca es tarde para comenzar.",
      "faq.q3": "¿Dónde se realizan las sesiones?",
      "faq.a3":
        "Vamos a usted. Las sesiones pueden ocurrir en su hogar, en la escuela de su hijo o en la comunidad, donde sea que su hijo aprenda y crezca. Atendemos a familias en Miami-Dade y Broward.",
      "faq.q4": "¿Cuánto suele durar la terapia ABA?",
      "faq.a4":
        "Cada niño es diferente. Algunas familias trabajan con nosotros por varios meses, otras se quedan por años. El plan es individualizado desde la evaluación inicial y lo ajustamos continuamente según el progreso de su hijo. Siempre seremos honestos con usted sobre lo que vemos.",
      "faq.q5": "¿Necesitaré estar involucrado?",
      "faq.a5":
        "Sí. En ABA, la participación de los padres no es opcional, es esencial. Como BCBA estamos obligadas a entrenar a los padres, porque la terapia no puede ocurrir solo cuando hay un terapeuta en la habitación. Usted es quien mejor conoce a su hijo, y quien lleva el progreso a cada parte de la vida diaria. Sin esa consistencia, incluso un buen progreso puede retroceder cuando terminan las sesiones. Le entrenaremos y le acompañaremos junto al trabajo.",
      "faq.q6": "¿Ofrecen servicios en español?",
      "faq.a6":
        "Sí. Hablamos español y trabajamos con muchas familias hispanohablantes. Comunicarse con nosotros en su idioma es completamente bienvenido.",

      // Callback
      "callback.imgAlt":
        "Árbol corazón. Símbolo del cuidado y el crecimiento en el corazón de ABBA Family Therapy.",
      "callback.quote":
        "El comportamiento es comunicación. Nuestro trabajo es escuchar, y luego enseñar las palabras.",

      // CTA
      "cta.heading": "Cuando esté listo, aquí estaremos.",
      "cta.body":
        "No tiene que resolverlo todo de una vez. Envíe una pregunta, una preocupación, o \u201cNo tengo idea por dónde empezar.\u201d Vamos paso a paso. No tendrá que cargar con esto sola.",
      "cta.button": "Consulta Gratuita",

      // Contact
      "contact.eyebrow": "Contáctenos",
      "contact.heading": "Estamos Aquí para Ayudar",
      "contact.intro":
        "Envíe un mensaje, llámenos o visítenos. Natalia o alguien de su equipo responderá en menos de un día hábil. No hay preguntas equivocadas, solo envíenos lo que tiene en mente.",
      "contact.photoAria":
        "Foto de Natalia o de una terapeuta con un niño",
      "contact.photoHint":
        "Foto de Natalia o de una terapeuta con un niño",
      "contact.callAria": "Llamar al 786-752-7992",
      "contact.altPhoneLabel": "O llame",
      "contact.label.call": "Llamar",
      "contact.label.email": "Correo",
      "contact.label.visit": "Visitar",
      "contact.address": "8180 NW 36th St. Ste 228<br />Doral, FL 33166",
      "contact.formHeading": "Agende una Consulta",
      "contact.formLead":
        "Cuéntenos un poco sobre su hijo y cómo podemos ayudar.",
      "contact.field.name": "Nombre Completo",
      "contact.field.email": "Correo Electrónico",
      "contact.field.phone": "Número de Teléfono",
      "contact.field.message": "Su Mensaje",
      "contact.field.placeholder":
        "La edad de su hijo, qué le trae aquí, cualquier cosa que quiera que sepamos.",
      "contact.submit": "Enviar mensaje",
      "contact.formNote":
        "Marcador de diseño. Conecte a su backend o servicio de formularios cuando esté listo.",
      "contact.detailsHeading": "Horarios y Fundadora",
      "contact.hoursLabel": "Horarios",
      "contact.hoursValue":
        "Lun\u2013Vie, 8:00 a.m. a 6:00 p.m.<br />Sáb con cita previa",
      "contact.areaLabel": "Zona de servicio",
      "contact.areaValue": "Condado de Miami-Dade<br />Condado de Broward",
      "contact.founderTitle": "MS, BCBA / Fundadora",

      // Footer
      "footer.tagline":
        "Empoderando a los Niños. Apoyando a las Familias. En Miami-Dade y Broward.",
      "footer.visit": "Visítenos",
      "footer.follow": "Síganos",
      "footer.pages": "Páginas",
      "footer.about": "Nosotros",
      "footer.services": "Servicios",
      "footer.faq": "Preguntas",
      "footer.contact": "Contacto",
      "footer.rights": "Todos los derechos reservados.",
      "footer.serving": "Atendiendo a Miami-Dade y Broward, FL.",

      // Sticky call
      "sticky.callAria": "Llamar a ABBA Family Therapy",
    },
  };

  function getStoredLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) return saved;
    } catch (e) {}
    var nav = (navigator.language || "en").toLowerCase();
    if (nav.indexOf("es") === 0) return "es";
    return DEFAULT_LANG;
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function applyTranslations(lang) {
    var dict = translations[lang] || translations[DEFAULT_LANG];

    document.documentElement.lang = lang;
    if (dict["document.title"]) document.title = dict["document.title"];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });

    document
      .querySelectorAll("[data-i18n-placeholder]")
      .forEach(function (el) {
        var key = el.getAttribute("data-i18n-placeholder");
        if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
      });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] != null) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-content");
      if (dict[key] != null) el.setAttribute("content", dict[key]);
    });

    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.textContent = dict["nav.langToggle"];
      toggle.setAttribute("aria-label", dict["nav.langToggleAria"]);
      toggle.setAttribute("aria-pressed", lang === "es" ? "true" : "false");
      toggle.setAttribute("data-active-lang", lang);
    }
  }

  function init() {
    var current = getStoredLang();
    applyTranslations(current);

    var toggle = document.getElementById("lang-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      current = current === "es" ? "en" : "es";
      storeLang(current);
      applyTranslations(current);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
