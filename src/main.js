import { createIcons, icons } from 'lucide';

// Diccionario de Traducciones (Español / Inglés / Francés)
const translations = {
  es: {
    // Navbar
    nav_home: "INICIO",
    nav_about: "SOBRE MÍ",
    nav_services: "SERVICIOS",
    nav_skills: "HABILIDADES",
    nav_projects: "PROYECTOS",
    nav_testimonials: "TESTIMONIOS",
    nav_contact: "CONTACTO",
    nav_talk: "HABLEMOS",

    // Hero
    hero_hello: "HOLA, SOY",
    hero_role: "Desarrollador Full-Stack",
    hero_desc: "Construyo experiencias digitales excepcionales con tecnologías modernas. Apasionado por el código limpio, soluciones escalables y convertir ideas en realidad.",
    hero_hire: "CONTRÁTAME",
    hero_work: "VER MI TRABAJO",
    hero_avail: "DISPONIBLE PARA FREELANCE",

    // About
    about_tag: "SOBRE MÍ",
    about_heading: "Construyendo Soluciones Digitales que Marcan la Diferencia",
    about_desc: "Soy un Desarrollador Full-Stack apasionado con más de 6 años de experiencia creando aplicaciones web rápidas, escalables y fáciles de usar. Me especializo en tecnologías JavaScript en el stack MERN y disfruto resolviendo problemas complejos con soluciones elegantes.",
    about_years: "Años de Experiencia",
    about_projects: "Proyectos Realizados",
    about_clients: "Clientes Satisfechos",
    about_satisfaction: "Satisfacción Total",
    about_resume: "DESCARGAR CV",
    about_name_lbl: "Nombre:",
    about_email_lbl: "Correo:",
    about_loc_lbl: "Ubicación:",
    about_avail_lbl: "Disponibilidad:",
    about_avail_val: "Disponible para Freelance",

    // Services
    services_tag: "LO QUE HAGO",
    services_heading: "Mis Servicios",
    serv_web_title: "Desarrollo Web",
    serv_web_desc: "Aplicaciones web personalizadas construidas con tecnologías modernas y buenas prácticas.",
    serv_front_title: "Desarrollo Frontend",
    serv_front_desc: "Interfaces de usuario responsivas e interactivas con React, Next.js y Tailwind CSS.",
    serv_back_title: "Desarrollo Backend",
    serv_back_desc: "APIs RESTful y aplicaciones del lado del servidor con Node.js, Express y bases de datos.",
    serv_db_title: "Diseño de Bases de Datos",
    serv_db_desc: "Arquitectura y optimización de bases de datos para aplicaciones de alto rendimiento.",
    learn_more: "SABER MÁS",

    // Skills
    skills_tag: "MI EXPERIENCIA",
    skills_heading: "Habilidades y Tecnologías",
    bento_subtitle: "Stack tecnológico moderno, estándares de calidad y metodologías que impulsan cada una de mis soluciones.",
    bento_core_title: "Stack Principal (MERN & TypeScript)",
    bento_core_desc: "Arquitectura moderna y robusta para aplicaciones web escalables de principio a fin, integrando frontend interactivo con microservicios backend y bases de datos.",
    bento_perf_title: "Enfoque en Rendimiento",
    bento_perf_desc: "Optimización de tiempos de carga, accesibilidad y máxima fluidez en cada interacción.",
    bento_data_title: "Bases de Datos & Cloud",
    bento_data_desc: "Modelado SQL y NoSQL con despliegue en entornos cloud y contenedores.",
    bento_qual_title: "Buenas Prácticas & Calidad",
    bento_qual_desc: "Código limpio, pruebas unitarias con Jest, control de versiones Git y arquitectura modular.",
    bento_ui_title: "Diseño UI/UX & Frontend",
    bento_ui_desc: "Interfaces responsivas, sistemas de diseño coherentes y micro-interacciones atractivas.",

    // Projects
    proj_tag: "PROYECTOS DESTACADOS",
    proj_heading: "Algunos de Mis Trabajos Recientes",
    proj_view_all: "VER TODOS LOS PROYECTOS",
    proj_view: "Ver Proyecto",
    proj_filter_all: "Todos",
    proj_filter_fullstack: "Full-Stack",
    proj_filter_frontend: "Frontend",
    proj_filter_backend: "Backend",
    copy_btn: "Copiar",
    copied_btn: "¡Copiado!",

    // Testimonials
    test_tag: "TESTIMONIOS",
    test_heading: "Lo Que Dicen Los Clientes",
    test_1_quote: "\"José Eduardo entregó una aplicación web excepcional que superó nuestras expectativas. Su atención al detalle y experiencia técnica son sobresalientes.\"",
    test_2_quote: "\"Trabajar con José Eduardo fue una experiencia fantástica. Es profesional, se comunica con claridad y entrega código de alta calidad a tiempo.\"",
    test_3_quote: "\"José Eduardo transformó nuestra idea en una aplicación robusta. Su capacidad para resolver problemas y su enfoque de código limpio son impresionantes.\"",

    // Contact
    contact_tag: "PONTE EN CONTACTO",
    contact_heading: "Construyamos Algo Increíble Juntos",
    contact_desc: "¿Tienes un proyecto en mente? Hablemos sobre cómo hacer realidad tus ideas. Siempre me entusiasma trabajar en nuevos retos y proyectos innovadores.",
    contact_email_lbl: "Correo",
    contact_phone_lbl: "Teléfono",
    contact_loc_lbl: "Ubicación",
    contact_resp_lbl: "Tiempo de Respuesta",
    contact_resp_val: "En menos de 24 horas",
    form_name_lbl: "Tu Nombre",
    form_email_lbl: "Tu Correo Electrónico",
    form_type_lbl: "Tipo de Proyecto",
    form_opt_1: "Desarrollo Web",
    form_opt_2: "Aplicación Frontend",
    form_opt_3: "Backend & API",
    form_opt_4: "Proyecto Full-Stack",
    form_budget_lbl: "Rango de Presupuesto",
    form_msg_lbl: "Cuéntame sobre tu proyecto...",
    form_submit_btn: "ENVIAR MENSAJE",
    form_success_msg: "¡Gracias! Tu mensaje ha sido enviado correctamente. Responderé en menos de 24 horas.",

    // Footer
    footer_tagline: "Construyendo soluciones digitales que generan resultados y crean experiencias de usuario excepcionales.",
    footer_links_title: "Enlaces Rápidos",
    footer_follow_title: "Sígueme",
    footer_copyright: "© 2024 José Eduardo García Hurtado. Todos los derechos reservados.",
    footer_coffee: "Hecho con pasión ❤️ y mucho café ☕"
  },
  en: {
    // Navbar
    nav_home: "HOME",
    nav_about: "ABOUT",
    nav_services: "SERVICES",
    nav_skills: "SKILLS",
    nav_projects: "PROJECTS",
    nav_testimonials: "TESTIMONIALS",
    nav_contact: "CONTACT",
    nav_talk: "LET'S TALK",

    // Hero
    hero_hello: "HELLO, I'M",
    hero_role: "Full-Stack Developer",
    hero_desc: "I build exceptional digital experiences with modern technologies. Passionate about clean code, scalable solutions, and turning ideas into reality.",
    hero_hire: "HIRE ME",
    hero_work: "VIEW MY WORK",
    hero_avail: "AVAILABLE FOR FREELANCE",

    // About
    about_tag: "ABOUT ME",
    about_heading: "Building Digital Solutions That Make a Difference",
    about_desc: "I'm a passionate Full-Stack Developer with 6+ years of experience creating web applications that are fast, scalable, and user-friendly. I specialize in JavaScript technologies across the MERN stack and love solving complex problems with elegant solutions.",
    about_years: "Years Experience",
    about_projects: "Projects Completed",
    about_clients: "Happy Clients",
    about_satisfaction: "Client Satisfaction",
    about_resume: "DOWNLOAD RESUME",
    about_name_lbl: "Name:",
    about_email_lbl: "Email:",
    about_loc_lbl: "Location:",
    about_avail_lbl: "Availability:",
    about_avail_val: "Available for Freelance",

    // Services
    services_tag: "WHAT I DO",
    services_heading: "My Services",
    serv_web_title: "Web Development",
    serv_web_desc: "Custom web applications built with modern technologies and best practices.",
    serv_front_title: "Frontend Development",
    serv_front_desc: "Responsive and interactive user interfaces with React, Next.js, and Tailwind CSS.",
    serv_back_title: "Backend Development",
    serv_back_desc: "RESTful APIs and server-side applications with Node.js, Express, and databases.",
    serv_db_title: "Database Design",
    serv_db_desc: "Database architecture and optimization for high-performance applications.",
    learn_more: "LEARN MORE",

    // Skills
    skills_tag: "MY EXPERTISE",
    skills_heading: "Skills & Technologies",
    bento_subtitle: "Modern technology stack, quality standards, and methodologies powering every solution I build.",
    bento_core_title: "Core Stack (MERN & TypeScript)",
    bento_core_desc: "Modern and robust architecture for end-to-end scalable web applications, integrating interactive frontends with backend microservices and databases.",
    bento_perf_title: "Performance-Driven",
    bento_perf_desc: "Optimized load times, accessibility, and maximum fluidity in every user interaction.",
    bento_data_title: "Databases & Cloud",
    bento_data_desc: "SQL and NoSQL data modeling with cloud deployments and containerization.",
    bento_qual_title: "Best Practices & Quality",
    bento_qual_desc: "Clean code, unit testing with Jest, Git version control, and modular architecture.",
    bento_ui_title: "UI/UX & Frontend Design",
    bento_ui_desc: "Responsive interfaces, consistent design systems, and engaging micro-interactions.",

    // Projects
    proj_tag: "FEATURED PROJECTS",
    proj_heading: "Some of My Recent Work",
    proj_view_all: "VIEW ALL PROJECTS",
    proj_view: "View Project",
    proj_filter_all: "All",
    proj_filter_fullstack: "Full-Stack",
    proj_filter_frontend: "Frontend",
    proj_filter_backend: "Backend",
    copy_btn: "Copy",
    copied_btn: "Copied!",

    // Testimonials
    test_tag: "TESTIMONIALS",
    test_heading: "What Clients Say",
    test_1_quote: "\"José Eduardo delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise are outstanding.\"",
    test_2_quote: "\"Working with José Eduardo was a fantastic experience. He's professional, communicates well, and delivers high-quality code on time.\"",
    test_3_quote: "\"José Eduardo transformed our idea into a powerful application. His problem-solving skills and clean code approach are impressive.\"",

    // Contact
    contact_tag: "GET IN TOUCH",
    contact_heading: "Let's Build Something Amazing Together",
    contact_desc: "Have a project in mind? Let's discuss how we can bring your ideas to life. I'm always excited to work on new challenges and innovative projects.",
    contact_email_lbl: "Email",
    contact_phone_lbl: "Phone",
    contact_loc_lbl: "Location",
    contact_resp_lbl: "Response Time",
    contact_resp_val: "Within 24 hours",
    form_name_lbl: "Your Name",
    form_email_lbl: "Your Email",
    form_type_lbl: "Project Type",
    form_opt_1: "Web Development",
    form_opt_2: "Frontend Application",
    form_opt_3: "Backend & API",
    form_opt_4: "Full-Stack Project",
    form_budget_lbl: "Budget Range",
    form_msg_lbl: "Tell me about your project...",
    form_submit_btn: "SEND MESSAGE",
    form_success_msg: "Thank you! Your message has been sent successfully. I will respond within 24 hours.",

    // Footer
    footer_tagline: "Building digital solutions that drive results and create exceptional user experiences.",
    footer_links_title: "Quick Links",
    footer_follow_title: "Follow Me",
    footer_copyright: "© 2024 José Eduardo García Hurtado. All rights reserved.",
    footer_coffee: "Built with passion ❤️ and lots of coffee ☕"
  },
  fr: {
    // Navbar
    nav_home: "ACCUEIL",
    nav_about: "À PROPOS",
    nav_services: "SERVICES",
    nav_skills: "COMPÉTENCES",
    nav_projects: "PROJETS",
    nav_testimonials: "TÉMOIGNAGES",
    nav_contact: "CONTACT",
    nav_talk: "DISCUTONS",

    // Hero
    hero_hello: "BONJOUR, JE SUIS",
    hero_role: "Développeur Full-Stack",
    hero_desc: "Je conçois des expériences numériques d'exception avec des technologies modernes. Passionné par le code propre, les architectures évolutives et la réalisation concrète des idées.",
    hero_hire: "ENGAGEZ-MOI",
    hero_work: "VOIR MON TRAVAIL",
    hero_avail: "DISPONIBLE EN FREELANCE",

    // About
    about_tag: "À PROPOS DE MOI",
    about_heading: "Créer des Solutions Numériques qui Font la Différence",
    about_desc: "Je suis un Développeur Full-Stack passionné fort de plus de 6 ans d'expérience dans le développement d'applications web rapides, évolutives et intuitives. Spécialisé dans l'écosystème JavaScript et la pile MERN, j'aime résoudre des problèmes complexes avec des solutions élégantes.",
    about_years: "Années d'Expérience",
    about_projects: "Projets Réalisés",
    about_clients: "Clients Satisfaits",
    about_satisfaction: "Satisfaction Client",
    about_resume: "TÉLÉCHARGER LE CV",
    about_name_lbl: "Nom :",
    about_email_lbl: "Email :",
    about_loc_lbl: "Localisation :",
    about_avail_lbl: "Disponibilité :",
    about_avail_val: "Disponible en Freelance",

    // Services
    services_tag: "CE QUE JE FAIS",
    services_heading: "Mes Services",
    serv_web_title: "Développement Web",
    serv_web_desc: "Applications web sur mesure bâties avec les technologies modernes et les meilleures pratiques.",
    serv_front_title: "Développement Frontend",
    serv_front_desc: "Interfaces réactives et interactives conçues avec React, Next.js et Tailwind CSS.",
    serv_back_title: "Développement Backend",
    serv_back_desc: "APIs RESTful et applications serveurs avec Node.js, Express et bases de données robustes.",
    serv_db_title: "Conception de Bases de Données",
    serv_db_desc: "Architecture et optimisation de données pour des applications haute performance.",
    learn_more: "EN SAVOIR PLUS",

    // Skills
    skills_tag: "MON EXPERTISE",
    skills_heading: "Compétences & Technologies",
    bento_subtitle: "Stack technologique moderne, normes de qualité et méthodologies qui propulsent chacune de mes réalisations.",
    bento_core_title: "Stack Principal (MERN & TypeScript)",
    bento_core_desc: "Architecture moderne et robuste pour des applications web évolutives de bout en bout, associant un frontend interactif à des microservices backend et bases de données.",
    bento_perf_title: "Orienté Performance",
    bento_perf_desc: "Optimisation des temps de chargement, accessibilité et fluidité maximale à chaque interaction utilisateur.",
    bento_data_title: "Bases de Données & Cloud",
    bento_data_desc: "Modélisation SQL et NoSQL avec déploiements cloud et conteneurs.",
    bento_qual_title: "Bonnes Pratiques & Qualité",
    bento_qual_desc: "Code propre, tests unitaires avec Jest, gestion de versions Git et architecture modulaire.",
    bento_ui_title: "Design UI/UX & Frontend",
    bento_ui_desc: "Interfaces réactives, systèmes de design cohérents et micro-interactions captivantes.",

    // Projects
    proj_tag: "PROJETS EN VEDETTE",
    proj_heading: "Quelques-unes de Mes Réalisations Récentes",
    proj_view_all: "VOIR TOUS LES PROJETS",
    proj_view: "Voir le Projet",
    proj_filter_all: "Tous",
    proj_filter_fullstack: "Full-Stack",
    proj_filter_frontend: "Frontend",
    proj_filter_backend: "Backend",
    copy_btn: "Copier",
    copied_btn: "Copié !",

    // Testimonials
    test_tag: "TÉMOIGNAGES",
    test_heading: "Ce que Disent les Clients",
    test_1_quote: "\"José Eduardo a livré une application web remarquable qui a surpassé nos attentes. Son souci du détail et son expertise technique sont exceptionnels.\"",
    test_2_quote: "\"Collaborer avec José Eduardo a été une excellente expérience. Très professionnel, il communique avec clarté et livre un travail de haute qualité dans les délais.\"",
    test_3_quote: "\"José Eduardo a métamorphosé notre vision en une application puissante. Ses capacités de résolution et son approche de code propre sont admirables.\"",

    // Contact
    contact_tag: "CONTACTEZ-MOI",
    contact_heading: "Créons Quelque Chose d'Extraordinaire Ensemble",
    contact_desc: "Vous avez un projet en tête ? Échangeons sur la façon de donner vie à vos ambitions. Je suis toujours motivé par de nouveaux défis et projets innovants.",
    contact_email_lbl: "Email",
    contact_phone_lbl: "Téléphone",
    contact_loc_lbl: "Localisation",
    contact_resp_lbl: "Délai de Réponse",
    contact_resp_val: "Sous 24 heures",
    form_name_lbl: "Votre Nom",
    form_email_lbl: "Votre Email",
    form_type_lbl: "Type de Projet",
    form_opt_1: "Développement Web",
    form_opt_2: "Application Frontend",
    form_opt_3: "Backend & API",
    form_opt_4: "Projet Full-Stack",
    form_budget_lbl: "Budget Estimé",
    form_msg_lbl: "Parlez-moi de votre projet...",
    form_submit_btn: "ENVOYER LE MESSAGE",
    form_success_msg: "Merci ! Votre message a été transmis avec succès. Je vous répondrai sous 24 heures.",

    // Footer
    footer_tagline: "Bâtir des solutions numériques performantes qui créent des expériences utilisateur d'exception.",
    footer_links_title: "Liens Rapides",
    footer_follow_title: "Suivez-Moi",
    footer_copyright: "© 2024 José Eduardo García Hurtado. Tous droits réservés.",
    footer_coffee: "Conçu avec passion ❤️ et beaucoup de café ☕"
  }
};

const langLabels = {
  es: 'Español',
  en: 'English',
  fr: 'Français'
};

// Estado del idioma (por defecto Español o preferencia previa guardada)
let currentLang = localStorage.getItem('portfolio_lang') || 'es';
let isTransitioning = false;

// Inicializar clases de transición en los elementos i18n
function initLanguageTransitions() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.classList.add('lang-transition');
  });
}

function updateDropdownUI(lang) {
  const currentText = langLabels[lang] || 'Español';

  // Actualizar texto del botón principal en desktop y mobile
  const currentLabelDesktop = document.getElementById('lang-current-label');
  const currentLabelMobile = document.getElementById('lang-current-label-mobile');
  if (currentLabelDesktop) currentLabelDesktop.textContent = currentText;
  if (currentLabelMobile) currentLabelMobile.textContent = currentText;

  // Actualizar tildes / checks activos en los menús
  document.querySelectorAll('.lang-check').forEach((check) => {
    const checkLang = check.getAttribute('data-check-lang');
    if (checkLang === lang) {
      check.classList.remove('hidden');
    } else {
      check.classList.add('hidden');
    }
  });
}

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.es;

  // Actualizar todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  updateDropdownUI(lang);

  // Guardar preferencia
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.lang = lang;
}

function selectLanguage(newLang) {
  if (newLang === currentLang || isTransitioning) return;
  isTransitioning = true;

  const elements = document.querySelectorAll('[data-i18n]');

  // 1. Fase de salida: Fade out con desenfoque suave (400ms)
  elements.forEach((el) => el.classList.add('lang-fading'));

  // 2. Intercambio de contenido en el punto medio
  setTimeout(() => {
    currentLang = newLang;
    applyLanguage(currentLang);
    createIcons({ icons });

    // 3. Fase de entrada: Reaparición gradual y nítida
    setTimeout(() => {
      elements.forEach((el) => el.classList.remove('lang-fading'));
      setTimeout(() => {
        isTransitioning = false;
      }, 400);
    }, 60);
  }, 400);
}

// Inicializar iconos de Lucide y transiciones
createIcons({ icons });
initLanguageTransitions();

// Aplicar idioma inicial
applyLanguage(currentLang);

// --- Manejo del Menú Desplegable de Idiomas (Desktop & Mobile) ---
const langMenuBtn = document.getElementById('lang-menu-btn');
const langDropdownMenu = document.getElementById('lang-dropdown-menu');
const langChevron = document.getElementById('lang-chevron');

const langMenuBtnMobile = document.getElementById('lang-menu-btn-mobile');
const langDropdownMenuMobile = document.getElementById('lang-dropdown-menu-mobile');
const langChevronMobile = document.getElementById('lang-chevron-mobile');

function closeAllLanguageDropdowns() {
  if (langDropdownMenu) langDropdownMenu.classList.add('hidden');
  if (langChevron) langChevron.style.transform = 'rotate(0deg)';
  if (langDropdownMenuMobile) langDropdownMenuMobile.classList.add('hidden');
  if (langChevronMobile) langChevronMobile.style.transform = 'rotate(0deg)';
}

if (langMenuBtn && langDropdownMenu) {
  langMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = langDropdownMenu.classList.contains('hidden');
    closeAllLanguageDropdowns();
    if (isHidden) {
      langDropdownMenu.classList.remove('hidden');
      if (langChevron) langChevron.style.transform = 'rotate(180deg)';
    }
  });
}

if (langMenuBtnMobile && langDropdownMenuMobile) {
  langMenuBtnMobile.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = langDropdownMenuMobile.classList.contains('hidden');
    closeAllLanguageDropdowns();
    if (isHidden) {
      langDropdownMenuMobile.classList.remove('hidden');
      if (langChevronMobile) langChevronMobile.style.transform = 'rotate(180deg)';
    }
  });
}

// Opciones de selección de idioma
document.querySelectorAll('.lang-select-opt').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const chosenLang = button.getAttribute('data-select-lang');
    closeAllLanguageDropdowns();
    if (chosenLang) {
      selectLanguage(chosenLang);
    }
  });
});

// Cerrar menús al hacer clic fuera
document.addEventListener('click', (e) => {
  const containerDesktop = document.getElementById('lang-dropdown-container');
  const containerMobile = document.getElementById('lang-dropdown-container-mobile');

  const clickedInsideDesktop = containerDesktop && containerDesktop.contains(e.target);
  const clickedInsideMobile = containerMobile && containerMobile.contains(e.target);

  if (!clickedInsideDesktop && !clickedInsideMobile) {
    closeAllLanguageDropdowns();
  }
});

// Control del Menú Móvil Principal
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Cerrar el menú al presionar cualquier enlace
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      closeAllLanguageDropdowns();
    });
  });
}

// Interacción del Formulario de Contacto
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

if (contactForm && formFeedback) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formFeedback.classList.remove('hidden');
    contactForm.reset();

    // Ocultar mensaje de confirmación después de 6 segundos
    setTimeout(() => {
      formFeedback.classList.add('hidden');
    }, 6000);
  });
}

// ==========================================
// FASE 2: NAVEGACIÓN E INTERACTIVIDAD
// ==========================================

// 1. Scroll Spy (Navegación Activa en Navbar)
const spySections = document.querySelectorAll('section[id]');
const desktopNavLinks = document.querySelectorAll('#desktop-nav .nav-link');

function updateScrollSpy() {
  const scrollPosition = window.scrollY + 140; // Compensación de altura del navbar fijo

  spySections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      desktopNavLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateScrollSpy, { passive: true });
updateScrollSpy();

// 2. Botón Flotante "Volver Arriba" (Scroll to Top)
const scrollToTopBtn = document.getElementById('scroll-to-top');

function toggleScrollToTopBtn() {
  if (!scrollToTopBtn) return;
  if (window.scrollY > 400) {
    scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-3');
    scrollToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
  } else {
    scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-3');
    scrollToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
  }
}

window.addEventListener('scroll', toggleScrollToTopBtn, { passive: true });

if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 3. Botón "Copiar Correo" con 1 Clic y Notificación Visual
document.querySelectorAll('.copy-email-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const emailToCopy = btn.getAttribute('data-email') || 'eduardo.garcia@email.com';
    const textSpan = btn.querySelector('.copy-text');
    const iconEl = btn.querySelector('.copy-icon');

    try {
      await navigator.clipboard.writeText(emailToCopy);

      const dict = translations[currentLang] || translations.es;
      if (textSpan) textSpan.textContent = dict.copied_btn || '¡Copiado!';
      btn.classList.add('bg-emerald-600/40', 'border-emerald-500/60', 'text-emerald-300');

      if (iconEl) {
        iconEl.setAttribute('data-lucide', 'check');
        createIcons({ icons });
      }

      setTimeout(() => {
        const resetDict = translations[currentLang] || translations.es;
        if (textSpan) textSpan.textContent = resetDict.copy_btn || 'Copiar';
        btn.classList.remove('bg-emerald-600/40', 'border-emerald-500/60', 'text-emerald-300');
        if (iconEl) {
          iconEl.setAttribute('data-lucide', 'copy');
          createIcons({ icons });
        }
      }, 2000);
    } catch (err) {
      console.warn('Error al copiar correo:', err);
    }
  });
});

// 4. Filtro Interactivo de Proyectos por Categoría
const filterButtons = document.querySelectorAll('.project-filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    // Estilos activos e inactivos de los botones
    filterButtons.forEach((btn) => {
      btn.className = 'project-filter-btn px-5 py-2.5 min-h-[40px] rounded-full text-xs font-bold transition-all cursor-pointer bg-[#0c1631]/80 text-blue-200/70 hover:text-white hover:bg-blue-900/50 border border-blue-900/60 active:scale-95';
    });
    button.className = 'project-filter-btn px-5 py-2.5 min-h-[40px] rounded-full text-xs font-bold transition-all cursor-pointer bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40 active:scale-95';

    // Filtrar tarjetas con transición
    projectCards.forEach((card) => {
      const categories = card.getAttribute('data-category') || '';
      if (filter === 'all' || categories.includes(filter)) {
        card.classList.remove('card-hidden');
      } else {
        card.classList.add('card-hidden');
      }
    });
  });
});


