export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const profile = {
  name: 'Pablo López Gosálvez',
  email: 'palogo2001@hotmail.es',
  phone: '+34619069681',
  phoneDisplay: '+34 619 06 96 81',
  github: 'https://github.com/pabloccf',
  githubUser: 'pabloccf',
  linkedin: 'https://www.linkedin.com/in/pablo-l%C3%B3pez-gos%C3%A1lvez-9bbb0b228',
  manfred: 'https://mnf.red/3b5c261e-38c2-4e14-b5f6-9741c77498f9',
};

/** Projects shown in the Projects section. `image` is a file name in src/assets/projects/. */
export const projectMeta = {
  autoelite: {
    image: 'autoelite.png',
    fit: 'contain',
    repo: 'https://github.com/pabloccf/autoElite',
    tags: ['PHP', 'Symfony 6.4', 'Twig', 'Doctrine', 'MariaDB', 'JavaScript'],
  },
  ucodex: {
    image: 'ucodex.png',
    fit: 'contain',
    repo: 'https://github.com/pabloccf/UcoDex',
    tags: ['Java', 'Android', 'XML', 'Gradle'],
  },
  wordle: {
    image: 'wordle.jpg',
    fit: 'contain',
    repo: 'https://github.com/pabloccf/Wordle',
    tags: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
  },
  portfolio: {
    image: 'portfolio.png',
    fit: 'cover',
    repo: '',
    tags: ['Astro', 'TypeScript', 'CSS', 'Lenis', 'Claude Code'],
  },
} as const;
export type ProjectId = keyof typeof projectMeta;

const techGroups = {
  backend: ['C#', '.NET', '.NET Core', 'ASP.NET', 'Entity Framework Core', 'NHibernate', 'Java', 'PHP', 'Symfony', 'C', 'C++'],
  frontend: ['Angular 2+', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'jQuery', 'AJAX', 'Twig'],
  data: ['SQL Server', 'PostgreSQL', 'MySQL', 'Oracle', 'PL/SQL', 'MongoDB', 'JSON', 'XML'],
  tools: ['Git', 'GitFlow', 'GitHub', 'GitLab', 'Docker', 'Linux', 'Bash', 'IIS', 'Postman', 'SoapUI', 'REST', 'SOAP', 'Visual Studio', 'VS Code'],
};

export const ui = {
  es: {
    meta: {
      title: 'Pablo López Gosálvez — Desarrollador de Software',
      description:
        'Portfolio de Pablo López Gosálvez, ingeniero de software full-stack especializado en .NET y Angular, IA agéntica y automatización. Córdoba, España.',
    },
    nav: {
      skip: 'Saltar al contenido',
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      tech: 'Tecnologías',
      community: 'Comunidad',
      contact: 'Contacto',
      menu: 'Abrir menú',
      themeToLight: 'Cambiar a modo claro',
      themeToDark: 'Cambiar a modo oscuro',
      switchLang: 'View this page in English',
    },
    hero: {
      badge: 'Disponible para nuevos retos',
      typed: ['Desarrollador de Software', 'Desarrollador Full-Stack', 'Ingeniero de Software', 'Agentic AI & Automation'],
      desc: 'Ingeniero de software especializado en <strong>desarrollo web full-stack</strong> con <strong>.NET y Angular</strong>. Construyo aplicaciones web y APIs RESTful escalables y fáciles de mantener, aplicando <strong>DDD, arquitectura hexagonal y CQRS</strong>, y apuesto por la <strong>IA agéntica y la automatización</strong> con supervisión humana.',
      stats: [
        { value: '3+', label: 'Años de experiencia' },
        { value: '3', label: 'Empresas' },
        { value: '40+', label: 'Tecnologías' },
      ],
      ctaProjects: 'Ver proyectos',
      ctaCv: 'Descargar CV',
      codeComment: '// Hola, bienvenido a mi portfolio',
      codeLocation: 'Córdoba, España',
      codeHexagonal: 'Arquitectura Hexagonal',
      // Identifiers shown in the hero code window (C# names: no spaces or accents)
      code: {
        base: 'DesarrolladorSoftware',
        location: 'Ubicacion',
        stack: 'Tecnologias',
        practices: 'BuenasPracticas',
        ai: 'IA',
        aiItems: ['Claude Code', 'Copilot', 'Agentes'],
        openToWork: 'BuscandoRetos',
      },
    },
    about: {
      eyebrow: 'sobre mí',
      title: 'Código limpio, arquitectura sólida',
      paragraphs: [
        'Soy <strong>ingeniero de software</strong> especializado en <strong>desarrollo web full-stack</strong>, con experiencia profesional en el desarrollo y mantenimiento de aplicaciones web y <strong>API RESTful</strong>. Mi experiencia se centra principalmente en los ecosistemas <strong>.NET</strong> y <strong>Angular</strong>, aunque también cuento con experiencia en tecnologías como Java, SQL y otras tecnologías de desarrollo web.',
        'Cuento con una sólida base en diseño y arquitectura de software, incluyendo el <strong>diseño orientado al dominio (DDD)</strong>, la <strong>arquitectura hexagonal</strong>, <strong>CQRS</strong> y el patrón <strong>Modelo-Vista-Controlador (MVC)</strong>, y aplico estos principios para crear soluciones escalables, fáciles de mantener y de alta calidad.',
        'Tengo experiencia trabajando en equipos colaborativos, contribuyendo a la planificación, el desarrollo y la entrega de proyectos, al tiempo que colaboro activamente con otros para resolver problemas y mejorar las soluciones existentes. También me siento cómodo trabajando en inglés y comunicándome de forma eficaz en entornos profesionales.',
        'Integro la <strong>IA en mi forma de trabajar</strong>: uso agentes de código como <strong>Claude Code</strong> y asistentes como <strong>GitHub Copilot</strong> para analizar código, automatizar tareas repetitivas y acelerar el desarrollo, siempre con un enfoque <strong>human-in-the-loop</strong>, revisando y validando lo que generan antes de llevarlo a producción.',
        'Soy un desarrollador <strong>proactivo y adaptable</strong>, con un fuerte enfoque en el aprendizaje continuo, la calidad del software y la aplicación de buenas prácticas de desarrollo para crear soluciones robustas y fáciles de mantener.',
      ],
      skillsTitle: 'Mis habilidades',
      skills: ['Atención al detalle', 'Aprendizaje continuo', 'Proactividad'],
      langsTitle: 'Idiomas',
      langs: [
        { name: 'Español', level: 'Nativo / Bilingüe' },
        { name: 'Inglés', level: 'Avanzado' },
      ],
      photoAlt: 'Retrato de Pablo López Gosálvez',
      photoCaption: 'Córdoba, España',
    },
    experience: {
      eyebrow: 'experiencia',
      title: 'Trayectoria profesional',
      current: 'Actual',
      techLabel: 'Tecnologías',
      jobs: [
        {
          role: 'Full Stack Developer',
          company: 'ICCA',
          dates: 'nov 2024 — hoy',
          duration: '2 años',
          current: true,
          summary:
            'Me encargo del desarrollo y mantenimiento de aplicaciones web utilizando tecnologías como .NET, Angular, Java y SQL. He participado en diferentes proyectos para clientes como el Consorcio de Transportes de Madrid, los servicios de transporte público de Valencia y Zaragoza, y la cadena de supermercados Consum. Mis responsabilidades abarcan tanto el desarrollo front-end como el back-end, la implementación de nuevas funcionalidades y la mejora de los sistemas existentes. También trabajo con API REST y SOAP, participo en tareas de gestión de bases de datos con PostgreSQL, MySQL y SQL Server, y colaboro con el equipo a través de Git, GitFlow y metodologías ágiles.',
          tags: ['C#', '.NET', 'Angular', 'Java', 'SQL Server', 'PostgreSQL', 'REST', 'SOAP', 'EF Core', 'NHibernate', 'IIS'],
        },
        {
          role: 'Backend Developer (Associate)',
          company: 'Nfq Advisory, Solutions, Outsourcing',
          dates: 'sept 2024 — nov 2024',
          duration: '3 meses',
          current: false,
          summary:
            'Me encargué de tareas de desarrollo de software y gestión de datos para el cliente BBVA utilizando tecnologías como Java, SQL y MongoDB. También trabajé con estructuras de datos XML y JSON en entornos empresariales, colaborando en tareas de mantenimiento y mejora de aplicaciones y bases de datos internas.',
          tags: ['Java', 'MongoDB', 'SQL', 'Oracle', 'XML', 'JSON'],
        },
        {
          role: 'Full Stack Developer Intern',
          company: 'Eurotransportcar Servicios Logísticos del Automóvil',
          dates: 'oct 2023 — abr 2024',
          duration: '7 meses',
          current: false,
          summary:
            'Durante mis prácticas participé en el desarrollo y mantenimiento de aplicaciones web utilizando PHP, Symfony, JavaScript y MySQL. Implementé funcionalidades de front-end con HTML, CSS, Bootstrap y jQuery, y trabajé con API y solicitudes AJAX para mejorar la funcionalidad de las aplicaciones y la experiencia del usuario. También colaboré con el equipo utilizando Git y GitFlow.',
          tags: ['PHP', 'Symfony', 'JavaScript', 'MySQL', 'Bootstrap', 'jQuery', 'Docker', 'Twig'],
        },
      ],
      educationTitle: 'Formación',
      education: [
        {
          role: 'Ingeniería Informática',
          company: 'Universidad de Córdoba',
          dates: 'sept 2019 — sept 2024',
          summary: 'Ingeniería Informática con especialidad en Software.',
        },
        {
          role: 'Certificado B1 de inglés',
          company: 'Cambridge University',
          dates: 'oct 2016',
          summary: '',
        },
      ],
    },
    projects: {
      eyebrow: 'proyectos',
      title: 'Cosas que he construido',
      repo: 'Ver código',
      items: {
        autoelite: {
          name: 'AutoElite',
          badge: 'Trabajo Fin de Grado',
          desc: 'Aplicación web para facilitar la gestión integral de un concesionario multimarca. Desarrollada con Symfony 6.4, Twig y Doctrine sobre MariaDB, con migraciones de base de datos y entorno Docker Compose.',
        },
        ucodex: {
          name: 'UcoDex',
          badge: 'Proyecto en equipo',
          desc: 'Aplicación móvil Android que funciona como una Pokédex: lista todos los Pokémon con nombre e imagen, permite buscarlos por nombre y consultar sus tipos, habilidades y experiencia base.',
        },
        wordle: {
          name: 'Wordle',
          badge: 'Ingeniería Web',
          desc: 'Versión ampliada del juego Wordle con registro e inicio de sesión, perfiles editables, amigos, blog, modo claro y oscuro y niveles de dificultad que cambian el número de intentos.',
        },
        portfolio: {
          name: 'Este portfolio',
          badge: 'Desarrollado con IA',
          desc: 'Portfolio personal bilingüe con modo claro y oscuro, scroll suavizado y animaciones, construido con Astro y desarrollado junto a Claude Code como agente de programación, revisando y dirigiendo cada cambio.',
        },
      },
    },
    tech: {
      eyebrow: 'stack',
      title: 'Tecnologías y herramientas',
      groups: [
        { title: 'Backend', icon: 'server', items: techGroups.backend },
        { title: 'Frontend', icon: 'layout', items: techGroups.frontend },
        { title: 'Bases de datos y formatos', icon: 'database', items: techGroups.data },
        { title: 'Herramientas y APIs', icon: 'wrench', items: techGroups.tools },
        {
          title: 'IA y Agentes',
          icon: 'sparkles',
          items: ['Claude Code', 'GitHub Copilot', 'IA agéntica', 'Agentes de IA', 'LLMs', 'Prompt engineering', 'Automatización', 'Human-in-the-loop'],
        },
        {
          title: 'Mis buenas prácticas',
          icon: 'layers',
          items: ['Diseño orientado al dominio (DDD)', 'Arquitectura hexagonal', 'Event Storming', 'CQRS', 'Modelo-Vista-Controlador (MVC)', 'Metodologías ágiles'],
        },
      ],
    },
    community: {
      eyebrow: 'comunidad',
      title: 'Más allá del trabajo',
      items: [
        {
          name: 'Aula de Software Libre',
          tag: 'Universidad de Córdoba',
          desc: 'He participado activamente en la comunidad tecnológica a través del Aula de Software Libre, contribuyendo a la organización de talleres y eventos.',
        },
        {
          name: 'SalmorejoTech',
          tag: 'Conferencia tecnológica',
          desc: 'Colaboración en la organización de SalmorejoTech, una conferencia tecnológica centrada en el intercambio de conocimientos dentro del sector de las tecnologías de la información.',
        },
      ],
    },
    contact: {
      eyebrow: 'contacto',
      title: 'Hablemos',
      lead: '¿Tienes un proyecto, una oferta o simplemente quieres hablar de tecnología? Escríbeme por el canal que prefieras.',
      email: 'Email',
      phone: 'Teléfono',
      location: 'Ubicación',
      locationValue: 'Córdoba, España',
      profile: 'Perfil completo',
      profileValue: 'Manfred',
    },
    footer: {
      role: 'Desarrollador de Software · Córdoba',
      rights: 'Hecho con Astro.',
    },
  },
  en: {
    meta: {
      title: 'Pablo López Gosálvez — Software Developer',
      description:
        'Portfolio of Pablo López Gosálvez, full-stack software engineer specialized in .NET and Angular, agentic AI and automation. Córdoba, Spain.',
    },
    nav: {
      skip: 'Skip to content',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      tech: 'Tech',
      community: 'Community',
      contact: 'Contact',
      menu: 'Open menu',
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
      switchLang: 'Ver esta página en español',
    },
    hero: {
      badge: 'Open to new challenges',
      typed: ['Software Developer', 'Full-Stack Developer', 'Software Engineer', 'Agentic AI & Automation'],
      desc: 'Software engineer specialized in <strong>full-stack web development</strong> with <strong>.NET and Angular</strong>. I build scalable, maintainable web applications and RESTful APIs, applying <strong>DDD, hexagonal architecture and CQRS</strong>, and I embrace <strong>agentic AI and automation</strong> with a human in the loop.',
      stats: [
        { value: '3+', label: 'Years of experience' },
        { value: '3', label: 'Companies' },
        { value: '40+', label: 'Technologies' },
      ],
      ctaProjects: 'View projects',
      ctaCv: 'Download CV',
      codeComment: '// Hi, welcome to my portfolio',
      codeLocation: 'Córdoba, Spain',
      codeHexagonal: 'Hexagonal Architecture',
      code: {
        base: 'SoftwareDeveloper',
        location: 'Location',
        stack: 'Stack',
        practices: 'Practices',
        ai: 'AI',
        aiItems: ['Claude Code', 'Copilot', 'Agents'],
        openToWork: 'OpenToWork',
      },
    },
    about: {
      eyebrow: 'about me',
      title: 'Clean code, solid architecture',
      paragraphs: [
        "I'm a <strong>Software Engineer</strong> specialized in <strong>full-stack web development</strong>, with professional experience developing and maintaining web applications and <strong>RESTful APIs</strong>. My experience is mainly focused on the <strong>.NET</strong> and <strong>Angular</strong> ecosystems, with additional experience in technologies such as Java, SQL and other web development technologies.",
        'I have a strong foundation in software design and architecture, including <strong>Domain-Driven Design (DDD)</strong>, <strong>Hexagonal Architecture</strong>, <strong>CQRS</strong> and <strong>Model-View-Controller (MVC)</strong>, applying these principles to build scalable, maintainable and high-quality solutions.',
        "I'm experienced in working within collaborative teams, contributing to project planning, development and delivery, while actively collaborating with others to solve problems and improve existing solutions. I'm also comfortable working in English and communicating effectively in professional environments.",
        "I bring <strong>AI into the way I work</strong>: I use coding agents such as <strong>Claude Code</strong> and assistants like <strong>GitHub Copilot</strong> to analyse code, automate repetitive tasks and speed up development, always with a <strong>human-in-the-loop</strong> approach, reviewing and validating their output before it reaches production.",
        "I'm a <strong>proactive and adaptable</strong> developer with a strong focus on continuous learning, software quality and applying good development practices to build robust and maintainable solutions.",
      ],
      skillsTitle: 'My skills',
      skills: ['Attention to detail', 'Continuous learning', 'Proactivity'],
      langsTitle: 'Languages',
      langs: [
        { name: 'Spanish', level: 'Native / Bilingual' },
        { name: 'English', level: 'Advanced' },
      ],
      photoAlt: 'Portrait of Pablo López Gosálvez',
      photoCaption: 'Córdoba, Spain',
    },
    experience: {
      eyebrow: 'experience',
      title: 'Career path',
      current: 'Current',
      techLabel: 'Tech',
      jobs: [
        {
          role: 'Full Stack Developer',
          company: 'ICCA',
          dates: 'Nov 2024 — today',
          duration: '2 yrs',
          current: true,
          summary:
            "I work on the development and maintenance of web applications using technologies such as .NET, Angular, Java and SQL. I've taken part in projects for clients including the Madrid Transport Consortium, the public transport services of Valencia and Zaragoza, and the supermarket chain Consum. My responsibilities include both front-end and back-end development, implementing new features and improving existing systems. I also work with REST and SOAP APIs, take part in database management with PostgreSQL, MySQL and SQL Server, and collaborate with the team through Git, GitFlow and Agile workflows.",
          tags: ['C#', '.NET', 'Angular', 'Java', 'SQL Server', 'PostgreSQL', 'REST', 'SOAP', 'EF Core', 'NHibernate', 'IIS'],
        },
        {
          role: 'Backend Developer (Associate)',
          company: 'Nfq Advisory, Solutions, Outsourcing',
          dates: 'Sep 2024 — Nov 2024',
          duration: '3 months',
          current: false,
          summary:
            'I worked on software development and data management tasks for the client BBVA using technologies such as Java, SQL and MongoDB. I also worked with XML and JSON data structures in enterprise environments, collaborating in maintenance and improvement tasks for internal applications and databases.',
          tags: ['Java', 'MongoDB', 'SQL', 'Oracle', 'XML', 'JSON'],
        },
        {
          role: 'Full Stack Developer Intern',
          company: 'Eurotransportcar Servicios Logísticos del Automóvil',
          dates: 'Oct 2023 — Apr 2024',
          duration: '7 months',
          current: false,
          summary:
            'During my internship I took part in the development and maintenance of web applications using PHP, Symfony, JavaScript and MySQL. I implemented front-end features with HTML, CSS, Bootstrap and jQuery, and worked with APIs and AJAX requests to improve application functionality and user experience. I also collaborated with the team using Git and GitFlow.',
          tags: ['PHP', 'Symfony', 'JavaScript', 'MySQL', 'Bootstrap', 'jQuery', 'Docker', 'Twig'],
        },
      ],
      educationTitle: 'Education',
      education: [
        {
          role: 'Computer Engineering',
          company: 'Universidad de Córdoba',
          dates: 'Sep 2019 — Sep 2024',
          summary: 'Computer Engineering with a Software specialization.',
        },
        {
          role: 'B1 English Certificate',
          company: 'Cambridge University',
          dates: 'Oct 2016',
          summary: '',
        },
      ],
    },
    projects: {
      eyebrow: 'projects',
      title: "Things I've built",
      repo: 'View code',
      items: {
        autoelite: {
          name: 'AutoElite',
          badge: 'Final Degree Project',
          desc: 'Web application to manage a multi-brand car dealership end to end. Built with Symfony 6.4, Twig and Doctrine on MariaDB, with database migrations and a Docker Compose setup.',
        },
        ucodex: {
          name: 'UcoDex',
          badge: 'Team project',
          desc: 'Android app that works as a Pokédex: it lists every Pokémon with its name and image, lets you search by name and shows its types, abilities and base experience.',
        },
        wordle: {
          name: 'Wordle',
          badge: 'Web Engineering',
          desc: 'An extended take on Wordle with sign-up and login, editable profiles, friends, a blog, light and dark mode, and difficulty levels that change the number of attempts.',
        },
        portfolio: {
          name: 'This portfolio',
          badge: 'Built with AI',
          desc: 'Bilingual personal portfolio with light and dark mode, smooth scrolling and animations, built with Astro and developed alongside Claude Code as a coding agent, reviewing and steering every change.',
        },
      },
    },
    tech: {
      eyebrow: 'stack',
      title: 'Technologies & tools',
      groups: [
        { title: 'Backend', icon: 'server', items: techGroups.backend },
        { title: 'Frontend', icon: 'layout', items: techGroups.frontend },
        { title: 'Databases & formats', icon: 'database', items: techGroups.data },
        { title: 'Tools & APIs', icon: 'wrench', items: techGroups.tools },
        {
          title: 'AI & Agents',
          icon: 'sparkles',
          items: ['Claude Code', 'GitHub Copilot', 'Agentic AI', 'AI Agents', 'LLMs', 'Prompt engineering', 'Automation', 'Human-in-the-loop'],
        },
        {
          title: 'My best practices',
          icon: 'layers',
          items: ['Domain-Driven Design (DDD)', 'Hexagonal Architecture', 'Event Storming', 'CQRS', 'Model-View-Controller (MVC)', 'Agile'],
        },
      ],
    },
    community: {
      eyebrow: 'community',
      title: 'Beyond work',
      items: [
        {
          name: 'Aula de Software Libre',
          tag: 'University of Córdoba',
          desc: "I've been actively involved in the tech community through Aula de Software Libre, contributing to the organization of workshops and events.",
        },
        {
          name: 'SalmorejoTech',
          tag: 'Tech conference',
          desc: 'Helped organize SalmorejoTech, a technology conference focused on knowledge sharing within the IT sector.',
        },
      ],
    },
    contact: {
      eyebrow: 'contact',
      title: "Let's talk",
      lead: 'Have a project, an opportunity, or just want to talk tech? Reach out through whichever channel you prefer.',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'Córdoba, Spain',
      profile: 'Full profile',
      profileValue: 'Manfred',
    },
    footer: {
      role: 'Software Developer · Córdoba',
      rights: 'Built with Astro.',
    },
  },
} as const;

export type UI = (typeof ui)[Lang];

export const getUI = (lang: Lang) => ui[lang];

/** URL of the same page in the given language. Spanish lives at /, English at /en/. */
export const localePath = (lang: Lang) => (lang === defaultLang ? '/' : `/${lang}/`);

export const cvPath = (lang: Lang) => `/cv/pablo-lopez-gosalvez-cv-${lang}.pdf`;
